import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBox,
  LoginWrapper,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLeft,
  LoginRight,
} from "../Login/LoginStyles";

const Register = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <LoginLeft>
          <h1 style={{ fontSize: "4rem" }}>
            Movie<span style={{ color: "var(--btn-color)" }}>Mon</span>
          </h1>
          <LoginForm>
            <label>Nombre</label>
            <LoginInput type="text" placeholder="Nombre" />
            <label>Apellido</label>
            <LoginInput type="text" placeholder="Apellido" />
            <label>Correo electrónico</label>
            <LoginInput type="email" placeholder="Correo electrónico" />
            <label>Contraseña</label>
            <LoginInput type="password" placeholder="Constraseña" />
            <label>Repetir Contraseña</label>
            <LoginInput type="password" placeholder="Repetir Constraseña" />
            <LoginButton>REGISTRARSE</LoginButton>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Ya tenes cuenta?{" "}
              <Link to="/login" style={{ color: "var(--btn-color" }}>
                INICIAR SESIÓN
              </Link>
            </p>
          </LoginForm>
        </LoginLeft>
        <LoginRight></LoginRight>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Register;
