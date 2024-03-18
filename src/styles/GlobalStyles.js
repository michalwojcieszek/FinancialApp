import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
/* COLORS https://yeun.github.io/open-color/*/
    /* Grey TEXT color */
    --color-grey-000: #f8f9fa;
    --color-grey-100: #f1f3f5;
    --color-grey-200: #e9ecef;
    --color-grey-300: #dee2e6;
    --color-grey-500: #adb5bd;
    --color-grey-700: #212529;

    /* Blue */
    /* MAIN Color */
    --color-blue-700: #4263eb;
    --color-blue-500: #4c6ef5;
    --color-blue-400: #5c7cfa;
    --color-blue-000: #e7f5ff;

    /* RED */
    --color-red-800: #e03131;
    --color-red-700: #f03e3e;
    --color-red-600: #fa5252;
    --color-red-500: #ff6b6b;
    --color-red-400: #ff8787;

    /* PROGRESS BARS COLORS */
    --stats-green: #40c057;
    --stats-yellow: #ffd43b;
    --stats-orange: #fd7e14;
    --stats-red: #f03e3e;



/* GRADIENTS */
    --gradient-default: linear-gradient(to right, #748ffc , #5c7cfa);
    --gradient-hover: linear-gradient(to right, #4c6ef5, #4263eb);


    --gradient-red-default: linear-gradient(to right, #e03131, #fa5252);
    --gradient-red-hover: linear-gradient(to right, #f03e3e, #ff6b6b);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

  /* @media (max-width: 540px) {
    font-size: 70%
  } */
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--color-grey-700);
  background-color: var(--color-grey-100);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-blue-400);
  outline-offset: -1px;
}
button:focus
 {
  outline: 2px solid white;
  outline-offset: -1px;
}

button {
  font-weight: 500;
}

`;
export default GlobalStyles;
