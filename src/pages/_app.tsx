import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createContext } from 'use-context-selector';

import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme";

import { Theme } from "../styles/styled";
import { BaseProvider } from "../context/Base";

export const AppContext = createContext(null)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('theme')) ?? 'light'
    setTheme(localTheme)
  }, [])

  const onSetTheme = (theme: Theme) => {
    localStorage.setItem('theme', JSON.stringify(theme))
    setTheme(theme)
  }

  return (
    <BaseProvider theme={theme} setTheme={onSetTheme}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {theme && <Component {...pageProps} />}
      </ThemeProvider>
    </BaseProvider>
  )
}

export default MyApp
