import { DefaultTheme } from "styled-components";

const colors = {
  // black
  black: "#212121",
  // white
  white: "#ffffff",
  // gray
  darkGray: "#333333",
  charcoal: "#444444",
  mediumGray: "#999999",
  paleGray: "#e5e5e5",
  // purple
  purple: "#8757de",
  palePurple: "#ede3ff",
  // green
  green: "#10c259",
  paleGreen: "#d8ffe8",
}

const fonts = {
  family: {
    base: 'Pretendard',
  },
  size: {
    base: "15px",
    sm: "14px",
    xsm: "12px",
    lg: "16px",
    title: "24px",
  },
  weight: {
    light: 300,
    normal: 500,
    bold: 700,
  },
}

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
