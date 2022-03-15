import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import Switch from 'react-switch'
import { useContextSelector } from 'use-context-selector'

import * as S from "./styled"
import { shade } from 'polished'
import { BaseContext } from "../../context/Base"

const Header = () => {
  const { colors, title } = useContext(ThemeContext);

  const theme = useContextSelector(BaseContext, context => context.theme)
  const setTheme = useContextSelector(BaseContext, context => context.setTheme)
  
  const toggleTheme = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <S.BlogHeader>
      <p>Personal Blog</p>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={10}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.background}
      />
    </S.BlogHeader>
  );
}
 
export default Header

