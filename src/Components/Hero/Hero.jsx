import React from "react";
import { HeroContainerStyled, HeroTextStyled } from "./HeroStyles";
import IconScroll from "../IconScroll/IconScroll";
const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextStyled>
        <h1>
          Movie<span>Mon</span>
        </h1>
        <h3>el lugar de tus peliculas.</h3>
      </HeroTextStyled>
      <IconScroll />
    </HeroContainerStyled>
  );
};

export default Hero;
