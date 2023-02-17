import styled from "styled-components";

export const AddBtnStyled = styled.button`
  margin-top: 1rem;
  background: var(--btn-color);
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 5px;
  color: var(--white-main);
  transition: 500ms;

  &:hover {
    background: var(--btn-hover);
    color: red;
  }
`;
