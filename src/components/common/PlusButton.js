import React from "react";
import styled from "react-emotion";

const CustomButton = styled("button")`
  position: fixed;
  bottom: 0;
  right: 20px;
  height: 50px;
  width: 50px;
  background: #f44336;
  color: yellow;
  border: none;
  border-radius: 50px;
  margin-bottom: 20px;
  font-size: 26px;
  cursor: pointer;
  &:hover {
    font-size: 30px;
  }
`;

const PlusButton = ({ openModal }) => (
  <CustomButton data-testid="plus-btn" onClick={openModal}>
    +
  </CustomButton>
);

export default PlusButton;
