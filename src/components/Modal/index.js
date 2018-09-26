import React from "preact";
import Portal from "preact-portal";
// import { createPortal } from 'React';

let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return <Portal into={modalRoot}>{this.props.children}</Portal>;
    // return createPortal(this.props.children, this.el);
  }
}

export default Modal;
