import styled from "styled-components";

export const WatchlistContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 4rem 1rem;
  gap: 1rem;
  width: 100%;
  top: 70px;
  background: var(--bg-color);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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
