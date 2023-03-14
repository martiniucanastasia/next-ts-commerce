import { createGlobalStyle } from "styled-components";
import { fontStyles } from "./_fonts";
import { variables } from "./_variables";

export const GlobalStyles = createGlobalStyle`
${variables}
${fontStyles}

 * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-primary), sans-serif, Tahoma;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  p {
    margin: 0;
  }

  img {
    vertical-align: bottom;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
