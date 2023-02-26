import styled from "styled-components";
import img from "../../img/piratas.jpg";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  background: var(--card-color);
  border-radius: 10px;
  width: 800px;
  height: 600px;
  box-shadow: 0px 0px 18px 0px rgb(29, 35, 54);
  margin-top: 100px;
`;

export const LoginLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  min-width: 50%;
  height: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white-main);
`;

export const LoginInput = styled.input`
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  width: 300px;
  border-radius: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  color: var(--white-main);
  border: none;
  background: var(--btn-color);
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  font-weight: var(--medium);
  font-size: 1rem;

  &:hover {
    transition: 0.5s;
    background: var(--btn-hover);
  }
`;

export const LoginRight = styled.div`
  border-radius: 0 10px 10px 0;
  height: 100%;
  min-width: 50%;
  background-image: linear-gradient(transparent, black), url(${img});
  background-repeat: no-repeat;
  background-position: center;
`;
