import { css } from "styled-components";

import InterRegular from "../assets/fonts/inter-v12-latin-regular.woff2";
import Inter600 from "../assets/fonts/inter-v12-latin-600.woff2";

export const fontStyles = css`
  @font-face {
    font-family: InterRegular;
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format("woff2");
  }
  @font-face {
    font-family: Inter600;
    font-style: normal;
    font-weight: 600;
    src: url(${Inter600}) format("woff2");
  }
`;
