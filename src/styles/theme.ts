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
    background: '#0e0e10',
    text: '#efeff1',
    primary: '#18181b',
    secondary: '#23272A',
    border: '#adadb8',
    textpost: '#adadb8',
    blogpost: '#1f1f23'
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