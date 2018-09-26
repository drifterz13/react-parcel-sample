import React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  margin: 10px 15px;
  height: 200px;
  width: 350px;
  min-width: 200px;
  background: #f44336;
  color: #fff;
  border-radius: 25px;
  &:hover {
    box-shadow: 2px 2px 10px salmon;
    border: 4px solid salmon;
  }
  @media (max-width: 421px) {
    height: 150px;
    width: 300px;
  }
  transition: all 0.4s cubic-bezier(0.175 0.885 0.32 1.275);
`;

const Title = styled("div")`
  width: 100%;
  box-sizing: border-box;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  color: #000;
  background: #fff;
  padding: 15px;
`;

const Note = ({ title, content }) => (
  <Container>
    <Title>{title}</Title>
    <div style={{ padding: "0 15px" }}>
      <p>{content}</p>
    </div>
  </Container>
);

export default Note;
