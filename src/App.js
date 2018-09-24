import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import styled from "react-emotion";
import Home from "./components/Home";
import Navbar from "./components/Header";
import PlusButton from "./components/common/PlusButton";
import Modal from "./components/Modal";
import NoteForm from "./components/Form/NoteForm";

const Container = styled("div")`
  height: 100vh;
  margin: 0 20px;
  padding-top: 6em;
`;

const initialState = {
  title: "",
  content: "",
  openModal: false
};

class App extends React.Component {
  state = initialState;

  handleOpenModal = () => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(initialState);
  };

  render() {
    const { openModal, title, content } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Router>
            <Home path="/" />
          </Router>
          {openModal ? (
            <Modal>
              <NoteForm
                title={title}
                content={content}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                closeModal={this.handleOpenModal}
              />
            </Modal>
          ) : null}
          <PlusButton openModal={this.handleOpenModal} />
        </Container>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
