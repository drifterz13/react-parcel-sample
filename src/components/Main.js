import React from "react";
import { notes } from "../api";

class Main extends React.Component {
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
    notes.get().then(({ data: notes }) => this.setState({ notes }));
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
      notes.post(body).then(() => {
        this.getAllNotes();
      });
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      switchModal: this.handleOpenModal,
      handleSubmit: this.handleSubmit
    });
  }
}

export default Main;
