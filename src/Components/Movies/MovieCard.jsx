import React, { useState } from "react";
import { Movie } from "./MoviesStyles";
import { AiFillHeart } from "react-icons/ai";

const MovieCard = ({
  addToWatchlist,
  movie,
  removeFromWatchlist,
  watchlist,
}) => {
  const [color, setColor] = useState("white");

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
      {/* <AddBtn> */}
      <AiFillHeart
        style={{
          cursor: "pointer",
          backgroundColor: "var(--btn-color)",
          borderRadius: "10px",
          width: "30px",
          height: "30px",
          padding: "8px",
          marginTop: "10px",
          transition: "250ms",
        }}
        color={alreadyInWatchlist() ? "red" : "white"}
        onClick={() => {
          alreadyInWatchlist()
            ? removeFromWatchlist(movie)
            : addToWatchlist(movie);
          setColor(alreadyInWatchlist() ? !color : color);
        }}
      />
      {/* </AddBtn> */}
    </Movie>
  );
};

export default MovieCard;
