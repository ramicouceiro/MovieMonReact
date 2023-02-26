import React, { useState } from "react";
import MovieCard from "./MovieCard";
import {
  MoviesContainer,
  NextPrevBtnContainer,
  NextPrevButton,
  TitleContainer,
} from "./MoviesStyles";
import axios from "axios";
import Watchlist from "../Watchlist/Watchlist";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async (page) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f59472c123aff0ed052b757dc689e19e&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleIncrement = () => {
    setPage(page + 1);
  };

  getMovies(page);

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((m) => m.id !== movie.id));
  };

  return (
    <>
      <Watchlist
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
      <TitleContainer>
        <h1>Peliculas populares</h1>
      </TitleContainer>
      <NextPrevBtnContainer>
        <NextPrevButton onClick={handleDecrement}>-</NextPrevButton>
        <p>{page}</p>
        <NextPrevButton onClick={handleIncrement}>+</NextPrevButton>
      </NextPrevBtnContainer>
      <MoviesContainer>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              addToWatchlist={addToWatchlist}
            />
          );
        })}
      </MoviesContainer>
      <NextPrevBtnContainer>
        <NextPrevButton onClick={handleDecrement}>-</NextPrevButton>
        <p>{page}</p>
        <NextPrevButton onClick={handleIncrement}>+</NextPrevButton>
      </NextPrevBtnContainer>
    </>
  );
};

export default Movies;
