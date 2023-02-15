import styled from "styled-components";
import img from "../../img/images.jpg";

export const HeroContainerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding-left: 20rem;
  background-image: linear-gradient(transparent, black), url(${img});
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
