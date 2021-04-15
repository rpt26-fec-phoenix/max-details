import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  #details {
    box-sizing: border-box;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 1280px;
    min-width: 744px;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export default GlobalStyles;