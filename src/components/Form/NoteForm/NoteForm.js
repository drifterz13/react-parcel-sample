import React from 'preact';
import styled from "react-emotion";
import { css } from "emotion";
import { Label, FormInput, CloseButton } from "../../common";

const ModalContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled("div")`
  background: salmon;
  color: #000;
  border-radius: 25px;
  padding: 20px;
  width: 40%;
  @media (max-width: 420px) {
    width: 80%;
  }
`;

const CustomButton = styled("button")`
  display: block;
  margin: 0 auto;
  border: none;
  padding: 15px;
  border-radius: 20px;
  background: yellow;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  :active {
    border: 3px solid gold;
  }
  &:active {
    padding: 18px;
  }
`;

const NoteForm = ({
  title,
  content,
  handleChange,
  handleSubmit,
  closeModal
}) => (
  <ModalContainer data-testid="modal-notes">
    <ModalBody>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <h1
        className={css`
          text-align: center;
          margin: 15px;
        `}
      >
        Add Notes 🖋
      </h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <FormInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />
        <Label htmlFor="content">Content</Label>
        <FormInput
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Content"
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </ModalBody>
  </ModalContainer>
);

export default NoteForm;
