import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import {lightTheme, darkTheme, GlobalStyles} from "../styles/theme";
import Header from "../components/Header/Header";
import usePersistedState from "../utils/usePersistedState";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState('theme', lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme: lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
