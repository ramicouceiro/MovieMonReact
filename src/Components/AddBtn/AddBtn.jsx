import React from "react";
import { AddBtnStyled } from "./AddBtnStyles";

const AddBtn = ({ children, props }) => {
  return <AddBtnStyled props={props}>{children}</AddBtnStyled>;
};

export default AddBtn;
