import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: 60px;
  background: transparent;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2.5rem 1.5rem;
  z-index: 100;
`;

export const LinksContainerStyled = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkContainerStyled = styled.div`
  color: #fff;
  padding: 0 1rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  font-weight: var(--bold);
  :hover {
    transition: 500ms;
    color: ${(props) => (props.heart ? "red" : "var(--btn-hover)")};
  }
`;
