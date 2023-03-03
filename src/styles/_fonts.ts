import { css } from "styled-components";

export const fontStyles = css`
  @font-face {
    font-family: Inter, Verdana, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/inter-v12-latin-regular.woff2") format("woff2"),
      url("../assets/fonts/inter-v12-latin-regular.woff") format("woff"),
      url("../assets/fonts/inter-v12-latin-regular.ttf") format("ttf");
  }
  @font-face {
    font-family: Inter600, Verdana, Tahoma, sans-serif;
    font-style: normal;
    font-weight: bold;
    src: url("../assets/fonts/inter-v12-latin-600.woff2") format("woff2"),
      url("../assets/fonts/inter-v12-latin-600.woff") format("woff"),
      url("../assets/fonts/inter-v12-latin-600.ttf") format("ttf");
  }
`;
