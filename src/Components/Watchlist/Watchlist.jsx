import WatchlistItem from "./WatchlistItem";
import { WatchlistContainer } from "./WatchlistStyles";

const Watchlist = (props) => {
  if (props.watchlist.length === 0) {
    return (
      <WatchlistContainer className={`${props.hidden ? "hidden" : ""}`}>
        <h2 style={{ fontWeight: "var(--light)" }}>Tu watchlist esta vacía</h2>
      </WatchlistContainer>
    );
  } else {
    return (
      <WatchlistContainer className={`${props.hidden ? "hidden" : ""}`}>
        {props.watchlist.map((movie) => {
          return (
            <WatchlistItem
              key={movie.id}
              movie={movie}
              removeFromWatchlist={props.removeFromWatchlist}
            />
          );
        })}
      </WatchlistContainer>
    );
  }
};

export default Watchlist;
