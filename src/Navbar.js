import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

// const spin = keyframes`
//     to {
//         transform: rotate(360deg);
//     }
// `;

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block;
          /* animation: 1s ${spin} linear infinite; */
        `}
      >
        🐩
      </span>
    </header>
  );
};

export default Navbar;
