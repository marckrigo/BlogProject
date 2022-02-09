import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  title: 'light',
  colors: {
    background: '#f9f9f9',
    text: '#ffffff',
    primary: '#6883ba',
    secondary: '#ffffff',
    border: '#ececec',
    textpost: '#6e6a6a',
    blogpost: '#ffffff'
  }
}

export const darkTheme = {
  title: 'dark',
  colors: {
    background: '#2c2f33',
    text: '#efeff1',
    primary: '#23272A',
    secondary: '#23272A',
    border: '#383C3F',
    textpost: '#efeff1',
    blogpost: '#2c2f33'
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`