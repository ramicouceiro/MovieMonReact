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
        <Link to="/login">
          <LinkContainerStyled>INICIAR SESION</LinkContainerStyled>
        </Link>
        <LinkContainerStyled heart>
          <AiFillHeart />
        </LinkContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
