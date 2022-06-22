import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "./ResetCSS";

export const GlobalStyle = createGlobalStyle`

${ResetCSS}

body {
    font-family: 'Montserrat', sans-serif;
}

h1 {
    font-family: 'Elsie Swash Caps', cursive;
    font-size: 82px;
}

h2  {
    font-family: 'Elsie Swash Caps', cursive;
    font-size: 42px;
}

h3  {
    font-family: 'Elsie Swash Caps', cursive;
    font-size: 32px;
}

h4  { 
    font-size: 22px;
    color: rgba(32, 32, 32, 1);
    opacity: 0.5;
    font-weight: 400;
}

p {
    font-size: 16px;
    color: rgba(32, 32, 32, 1);
    opacity: 0.5;
    line-height: 26px;
}

a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: rgba(32, 32, 32, 1);
}
`;
