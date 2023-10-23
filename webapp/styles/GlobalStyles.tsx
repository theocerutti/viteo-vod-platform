"use client";

import { createGlobalStyle, css } from "styled-components";
import { getThemePropSelector } from "@/styles/utils";

const styles = css`
  * {
    font-size: max(14px, calc(0.2em + 0.8vw));
    color: ${getThemePropSelector("textPrimary")};
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  body html {
    height: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
