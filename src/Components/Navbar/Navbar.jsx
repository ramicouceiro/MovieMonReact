import { Link } from "react-router-dom";

import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <NavbarContainerStyled>
        <LinksContainerStyled>
          <Link to="/">
            <LinkContainerStyled>INICIO</LinkContainerStyled>
          </Link>
          <Link to="/login">
            <LinkContainerStyled>INICIAR SESION</LinkContainerStyled>
          </Link>
        </LinksContainerStyled>
        {/* <AiFillHeart /> */}
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
