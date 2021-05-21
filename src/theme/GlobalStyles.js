import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    ${colors}

    --font-primary: "Inter", sans-serif;
    --layout-width: 1100px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--colors-darkBlue);
    background-color: var(--colors-porcelain);

    .ant-popover-arrow {
      border-color: var(--colors-mine-shaft) !important;
    }

    .ant-popover-inner-content {
      padding: 0;
    }
  }
`;

export default GlobalStyles;
