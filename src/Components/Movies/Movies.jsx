import React, { useState } from "react";
import MovieCard from "./MovieCard";
import {
  MoviesContainer,
  NextPrevBtnContainer,
  NextPrevButton,
} from "./MoviesStyles";
import axios from "axios";
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
  return (
    <>
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
              img={movie.poster_path}
              title={movie.title}
              id={movie.id}
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
