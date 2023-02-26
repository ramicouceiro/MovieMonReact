import React, { useState } from "react";
import AddBtn from "../AddBtn/AddBtn";
import { Movie } from "./MoviesStyles";
import { AiFillHeart } from "react-icons/ai";

const MovieCard = ({
  addToWatchlist,
  movie,
  removeFromWatchlist,
  watchlist,
}) => {
  const [color, setColor] = useState(false);

  const alreadyInWatchlist = () => {
    if (watchlist.find((m) => m.id === movie.id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Movie>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <AddBtn>
        <AiFillHeart
          color={alreadyInWatchlist() ? "red" : "white"}
          onClick={() => {
            addToWatchlist(movie);
            setColor(alreadyInWatchlist() ? !color : color);
          }}
        />
      </AddBtn>
    </Movie>
  );
};

export default MovieCard;
