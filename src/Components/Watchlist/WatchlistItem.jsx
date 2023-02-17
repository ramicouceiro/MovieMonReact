import React from "react";
import AddBtn from "../AddBtn/AddBtn";
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
      <AddBtn>
        <ImCross
          onClick={() => {
            removeFromWatchlist(movie);
          }}
        />
      </AddBtn>
    </WatchlistItemStyled>
  );
};

export default WatchlistItem;
