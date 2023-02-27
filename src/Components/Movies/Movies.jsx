import React, { useState, useEffect } from "react";
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
  const saveLocalStorage = (watchlist) => {
    localStorage.setItem("watch", JSON.stringify(watchlist));
  };

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
      saveLocalStorage([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((m) => m.id !== movie.id));
    saveLocalStorage(watchlist.filter((m) => m.id !== movie.id));
  };
  const clearWatchlist = () => {
    setWatchlist([]);
    saveLocalStorage([]);
  };
  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watch"));
    if (watchlist) {
      setWatchlist(watchlist);
    }
  }, []);
  return (
    <>
      <Watchlist
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
        clearWatchlist={clearWatchlist}
      />
      <TitleContainer>Peliculas populares</TitleContainer>
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
              removeFromWatchlist={removeFromWatchlist}
              watchlist={watchlist}
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
