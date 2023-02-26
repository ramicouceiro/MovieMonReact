import WatchlistItem from "./WatchlistItem";
import { WatchlistContainer } from "./WatchlistStyles";

const Watchlist = (props) => {
  if (props.watchlist.length === 0) {
    return (
      <WatchlistContainer>
        <h2 style={{ fontWeight: "var(--medium)" }}>Tu watchlist esta vacía</h2>
      </WatchlistContainer>
    );
  } else {
    return (
      <WatchlistContainer>
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
