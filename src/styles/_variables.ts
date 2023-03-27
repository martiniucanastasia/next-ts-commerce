import { css } from "styled-components";

const colors = css`
  --gray-100: #f7fafc;
  --gray-200: #eff2f4;
  --gray-300: #dee2e7;
  --gray-400: #bdc4cd;
  --gray-500: #8b96a5;
  --gray-600: #505050;
  --gray-700: #1c1c1c;

  --primary: #0d6efd;
  --primary-100: #e3f0ff;

  --secondary: #00b517;
  --secondary-100: #c3ffcb;

  --danger: #fa3434;
  --danger-100: #FFE3E3;

  --warning: #ff9017;
  --warning-100: #ffe5bf;

  --notice:

  --primary-gradient: linear-gradient(
    to right,
    rgba(18, 127, 255, 1) 0%,
    rgba(0, 103, 255, 1) 100%
  );
`;

const fontSizes = css`
  --text-xxxl: clamp(2.81rem, calc(2.76rem + 0.27vw), 3rem); // min 45, max 48
  --text-xxl: clamp(1.88rem, calc(1.84rem + 0.18vw), 2rem); // min 30, max 32
  --text-xl: clamp(1.38rem, calc(1.34rem + 0.18vw), 1.5rem); // min 22, max 24
  --text-l: clamp(1.19rem, calc(1.17rem + 0.09vw), 1.25rem); // min 19, max 20
  --text-m: clamp(1.06rem, calc(1.04rem + 0.09vw), 1.13rem); // min 17, max 18
  --text-s: clamp(0.94rem, calc(0.92rem + 0.09vw), 1rem); // min 15, max 16
  --text-xs: clamp(0.81rem, calc(0.79rem + 0.09vw), 0.88rem); // min 13, max 14
  --text-xxs: clamp(0.75rem, calc(0.73rem + 0.09vw), 0.81rem); // min 12, max 13
  --text-xxxs: clamp(0.69rem, calc(0.67rem + 0.09vw), 0.75rem); // min 11, max 12
`;

const fontFamilies = css`
  --font-primary: "Inter";
`;

export const variables = css`
  :root {
    ${colors}
    ${fontSizes}
    ${fontFamilies}
  }
`;
