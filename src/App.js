import React, { Fragment } from "react";
import { render } from "react-dom";
import styled from "react-emotion";
import Home from "./components/Home";
import Navbar from "./components/Header";
import PlusButton from "./components/common/PlusButton";
import Modal from "./components/Modal";
import NoteForm from "./components/Form/NoteForm";
import api from "./api";

const Container = styled("div")`
  height: 100vh;
  margin: 0 20px;
  padding-top: 6em;
`;

class App extends React.Component {
  state = {
    title: "",
    content: "",
    notes: [],
    openModal: false
  };

  componentDidMount() {
    this.getAllNotes();
  }

  getAllNotes = () => {
    api
      .notes(process.env.API_URL)
      .getAll()
      .then(({ data: notes }) => this.setState({ notes }));
  };

  handleOpenModal = () => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, content, openModal } = this.state;
    this.setState({ openModal: !openModal }, () => {
      const body = { title, content };
      api
        .notes(process.env.API_URL)
        .create(body)
        .then(() => {
          this.getAllNotes();
        });
    });
  };

  render() {
    const { openModal, title, content, notes } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Home notes={notes} />
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
