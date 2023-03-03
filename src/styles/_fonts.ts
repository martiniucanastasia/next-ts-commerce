import { css } from "styled-components";

export const fontStyles = css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/inter-v12-latin-regular.woff2"),
      url("/fonts/inter-v12-latin-regular.woff") format("woff"),
      url("/fonts/inter-v12-latin-regular.ttf") format("ttf");
  }

  @font-face {
    font-family: "Inter Bold";
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url("/fonts/inter-v12-latin-600.woff2") format("woff2"),
      url("/fonts/inter-v12-latin-600.woff") format("woff"),
      url("/fonts/inter-v12-latin-600.ttf") format("ttf");
  }
`;
