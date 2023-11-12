import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    font-weight: 500;
    -webkit-touch-callout: none;
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      body {
        font-family: ${fonts.family.base};
        height: 100%;
      }
      a {
        text-decoration: none;
        color: ${colors.black};
      }
      a:visited {
        color: ${colors.black};
      }
    `;
  }}
`;
export default GlobalStyles;
