import styled from "react-emotion";

export const FormInput = styled("input")`
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #fff;
  margin: 10px 0;
  box-sizing: border-box;
  width: 100%;
  resize: vertical;
  &:focus {
    border: 4px solid #ffeb3b;
    box-shadow: 0 0 3px yellow;
  }
`;
