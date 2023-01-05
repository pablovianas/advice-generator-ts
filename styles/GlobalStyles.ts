import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: teal;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.primary.backgroundColor};
      font-family: 'Manrope', sans-serif;
      font-weight: 800;
    }
    main{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;


