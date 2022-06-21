import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "./ResetCSS";

export const GlobalStyle = createGlobalStyle`
${ResetCSS}

* {
    font-family: 'Montserrat', sans-serif;
}

a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: rgba(32, 32, 32, 1);
}
`;
