import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  title: 'light',
  colors: {
    background: '#f9f9f9',
    text: '#fff',
    primary: '#6883ba',
    secondary: '#fff'
  }
}

export const darkTheme = {
  title: 'dark',
  colors: {
    background: '#2c2f33',
    text: '#fff',
    primary: '#23272A',
    secondary: '#fff'
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
     background-color: #2c2f33; ${props => props.theme.colors.background};
    color: #23272A; ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`