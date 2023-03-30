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
    background-color: var(--gray-100);
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  h3 {
    font-size: var(--text-l);
    font-weight: 600;
  }
  
  h4 {
    font-size: var(--text-xl);
    font-weight: 600;
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
