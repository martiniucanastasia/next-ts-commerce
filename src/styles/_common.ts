import styled from "styled-components";

export const pxToRem = (...px: number[]) => {
  const defaultTextSizePx = 16;

  return px.map((item: number) => `${item / defaultTextSizePx}rem`).join(" ");
};

export const Container = styled.div`
  max-width: ${pxToRem(1210)};
  margin: 0 auto;
  padding: 0 ${pxToRem(15)};
`;
