import React from "react";
import Hero from "../../Components/Hero/Hero";
import Movies from "../../Components/Movies/Movies";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Movies />
    </HomeWrapper>
  );
};

export default Home;
