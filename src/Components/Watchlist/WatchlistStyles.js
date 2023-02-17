import styled from "styled-components";

export const WatchlistContainer = styled.div`
  display: flex;
`;

export const WatchlistItemStyled = styled.div`
  display: flex;
  padding: 1rem;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  background: var(--card-color);
  border-radius: 10px;
  border: 1px solid var(--btn-color);

  img {
    height: 100px;
    object-fit: contain;
  }

  h2 {
    font-size: 1rem;
  }
`;
