import React from "react";
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
        <LinkContainerStyled>INICIO</LinkContainerStyled>
        <LinkContainerStyled>INICIAR SESION</LinkContainerStyled>
        <LinkContainerStyled heart>
          <AiFillHeart />
        </LinkContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
