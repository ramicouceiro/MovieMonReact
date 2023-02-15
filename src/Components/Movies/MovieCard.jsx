import React from "react";
import { Movie } from "./MoviesStyles";

const MovieCard = ({ img, title, id }) => {
  return (
    <Movie>
      <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={title} />
      <h2>{title}</h2>
    </Movie>
  );
};

export default MovieCard;
