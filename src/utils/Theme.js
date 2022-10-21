import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', Tahoma, Helvetica, Arial, sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const darkTheme = {
  bg:"#181818",
  bgLighter:"#202020",
  text:"white",
  textSoft:"#aaa",
  soft:"#373737"
}

export const lightTheme = {
  bg: "#f9f9f9",
  bgLighter: "white",
  text: "black",
  textSoft: "#606060",
  soft: "#f5f5f5",
};