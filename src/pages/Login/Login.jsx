import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBox,
  LoginButton,
  LoginForm,
  LoginInput,
  LoginLeft,
  LoginRight,
  LoginWrapper,
} from "./LoginStyles";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <LoginLeft>
          <h1 style={{ fontSize: "4rem" }}>
            Movie<span style={{ color: "var(--btn-color)" }}>Mon</span>
          </h1>
          <LoginForm>
            <label style={{ marginTop: "1rem" }}>Usuario</label>
            <LoginInput type="text" placeholder="Usuario" />
            <label style={{ marginTop: "1rem" }}>Contraseña</label>
            <LoginInput type="password" placeholder="Contraseña" />
            <LoginButton>INICIAR SESION</LoginButton>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Todavia no tenes cuenta?{" "}
              <Link to="/register" style={{ color: "var(--btn-color" }}>
                REGISTRATE
              </Link>
            </p>
          </LoginForm>
        </LoginLeft>
        <LoginRight></LoginRight>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
