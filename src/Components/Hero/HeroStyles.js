import styled from "styled-components";
import img from "../../img/images.jpg";

export const HeroContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20%;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(transparent, black), url(${img});
  z-index: -1;

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
  }
`;

export const HeroTextStyled = styled.div`
  h1 {
    font-size: 5rem;
  }

  span {
    color: var(--btn-color);
  }

  h3 {
    font-weight: var(--light);
  }
`;
