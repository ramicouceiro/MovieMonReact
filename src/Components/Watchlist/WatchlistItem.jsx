import React from "react";
import { ImCross } from "react-icons/im";
import { WatchlistItemStyled } from "./WatchlistStyles";

const WatchlistItem = ({ removeFromWatchlist, movie }) => {
  return (
    <WatchlistItemStyled>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <ImCross
        className="remove-btn"
        style={{
          cursor: "pointer",
          backgroundColor: "var(--btn-color)",
          borderRadius: "10px",
          minWidth: "30px",
          minHeight: "30px",
          padding: "10px",
          transition: "250ms",
          marginLeft: "10px",
        }}
        onClick={() => {
          removeFromWatchlist(movie);
        }}
      />
    </WatchlistItemStyled>
  );
};

export default WatchlistItem;
