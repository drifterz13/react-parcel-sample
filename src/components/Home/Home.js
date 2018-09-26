import React from 'preact';
import styled from "react-emotion";
import Note from "../Note";

const FlexWrapper = styled("div")`
  display: flex;
  flex-flow: wrap;
  align-items: center;
`;

const Home = ({ notes }) => {
  if (!notes) {
    return <div>loading ..</div>;
  } else {
    return (
      <FlexWrapper data-testid="home">
        {notes.length > 0 &&
          notes.map(note => (
            <Note
              data-testid="notes"
              key={note._id}
              content={note.content}
              title={note.title}
            />
          ))}
      </FlexWrapper>
    );
  }
};

export default Home;
