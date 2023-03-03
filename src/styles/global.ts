import { createGlobalStyle } from "styled-components";
import { fontStyles } from "./_fonts";
import { variables } from "./_variables";

export const Global = createGlobalStyle`
${variables}
${fontStyles}

* {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    border: none;
  }

  button {
    border: none;
  }

  p {
    margin: 0;
  }

  img {
    vertical-align: bottom;
  }
  li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;