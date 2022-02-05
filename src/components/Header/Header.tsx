import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import Switch from 'react-switch';

import { BlogHeader } from "./styled";
import { shade } from 'polished';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ( { toggleTheme} ) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <BlogHeader>
      Marmelo's Blog

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
    </BlogHeader>
  );
}
 
export default Header;

