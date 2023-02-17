import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import { Movie } from "./MoviesStyles";
import { AiFillHeart } from "react-icons/ai";

const MovieCard = ({ addToWatchlist, movie }) => {
  return (
    <Movie>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <AddBtn>
        <AiFillHeart
          onClick={() => {
            addToWatchlist(movie);
          }}
        />
      </AddBtn>
    </Movie>
  );
};

export default MovieCard;