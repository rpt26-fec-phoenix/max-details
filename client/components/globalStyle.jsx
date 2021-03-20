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
  }
`;

export default GlobalStyles;