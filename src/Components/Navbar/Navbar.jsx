import React from "react";
import { Link } from "react-router-dom";
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";
import { AiFillHeart } from "react-icons/ai";
const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LinksContainerStyled>
        <Link to="/">
          <LinkContainerStyled>INICIO</LinkContainerStyled>
        </Link>
        <LinkContainerStyled>INICIAR SESION</LinkContainerStyled>
        <LinkContainerStyled heart>
          <AiFillHeart />
        </LinkContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
