import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        color: hsl(192, 100%, 9%);
        font-family: "Roboto", sans-serif;
        font-size: 1.15em;
      }
    `}
  />
);

export default GlobalStyles;
