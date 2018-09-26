import React from 'preact';
import styled from "react-emotion";
import { css } from "emotion";

const Header = styled("header")`
  background-color: #f44336;
  border-bottom: 4px solid white;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  overflow: hidden;
`;

const logo = css`
  display: inline-block;
  color: palegoldenrod;
  h1,
  span {
    display: inline-block;
    padding: 0 2px;
  }
  &:hover {
    color: yellow;
    h1 {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => (
  <Header>
    <a href="/" className={logo}>
      <h1>Notes</h1>
      <span
        aria-labelledby="logo"
        role="img"
        className={css`
          font-size: 22px;
        `}
      >
        📖
      </span>
    </a>
  </Header>
);

export default Navbar;
