import React, { Fragment } from "react";
import { render } from "react-dom";
import styled from "react-emotion";
import Home from "./components/Home";
import Navbar from "./components/Header";
import PlusButton from "./components/common/PlusButton";
import Modal from "./components/Modal";
import NoteForm from "./components/Form/NoteForm";
import Main from "./components/Main";

const Container = styled("div")`
  height: 100vh;
  margin: 0 20px;
  padding-top: 6em;
`;

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        {({
          title,
          content,
          notes,
          openModal,
          handleChange,
          handleSubmit,
          switchModal
        }) => (
          <Container>
            <Home notes={notes} />
            Hey
            {openModal ? (
              <Modal>
                <NoteForm
                  title={title}
                  content={content}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  closeModal={switchModal}
                />
              </Modal>
            ) : null}
            <PlusButton openModal={switchModal} />
          </Container>
        )}
      </Main>
    </Fragment>
  );
};

export default App;
