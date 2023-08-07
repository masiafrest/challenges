import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --green: hsl(164, 100%, 36%);
  --light-blue: hsl(216, 53%, 34%);
  --input-border-color: hsl(216, 26%, 58%);
  --dark-blue: hsl(220, 61%, 21%);
  --dark-grey: hsl(0, 0%, 55%);
  --light-grey: hsl(0, 0%, 89%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: auto;
  background-color: var(--dark-blue);
  color: white;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

export default GlobalStyles;
