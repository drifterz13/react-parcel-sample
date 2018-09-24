import React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  margin: 10px 15px;
  height: 200px;
  width: 350px;
  min-width: 200px;
  background: #f44336;
  color: #fff;
  box-shadow: 0 0 5px #fff;
  @media (max-width: 421px) {
    height: 150px;
    width: 300px;
  }
`;

const Title = styled("div")`
  width: 100%;
  box-sizing: border-box;
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
