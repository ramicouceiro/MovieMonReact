import styled from "styled-components";

export const WatchlistContainer = styled.div`
  display: flex;
  z-index: 100;
  overflow-x: auto;
  padding: 4rem 1rem;
  gap: 1rem;
  background: var(--bg-color);
  position: relative;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
`;

export const WatchlistItemStyled = styled.div`
  display: flex;
  padding: 1rem;
  min-width: 300px;
  max-width: 300px;
  justify-content: space-around;
  align-items: center;
  background: var(--card-color);
  border-radius: 10px;
  /* border: 1px solid var(--btn-color); */
  box-shadow: 0px 0px 21px 0px var(--btn-color);

  img {
    height: 100px;
    object-fit: contain;
    margin: 0 1rem;
    border-radius: 10px;
  }

  h2 {
    font-size: 1rem;
    font-weight: var(--medium);
  }
`;
