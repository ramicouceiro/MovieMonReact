import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 350px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const Movie = styled.div`
  text-align: center;
  background: var(--card-color);
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  height: 100%;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
`;

export const NextPrevButton = styled.button`
  background: var(--btn-color);
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 5px;
  color: var(--white-main);
  margin: 0 1rem;
  font-weight: 600;
  transition: 500ms;

  &:hover {
    background: var(--btn-hover);
  }
`;

export const NextPrevBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  margin-top: 4rem;
`;

export const TitleContainer = styled.h1`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;
