import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { Link } from "@reach/router";

const Header = styled("header")`
  background-color: #f44336;
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
    <Link to="/" className={logo}>
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
    </Link>
  </Header>
);

export default Navbar;
