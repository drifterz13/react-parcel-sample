import React from "react";
import styled from "react-emotion";
import Note from "../Note";

const FlexWrapper = styled("div")`
  display: flex;
  flex-flow: wrap;
  align-items: center;
`;

const Home = ({ notes }) => (
  <FlexWrapper>
    {notes.map(note => (
      <Note key={note._id} content={note.content} title={note.title} />
    ))}
  </FlexWrapper>
);

export default Home;
