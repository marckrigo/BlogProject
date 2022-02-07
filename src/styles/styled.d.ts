import styled from "styled-components";
import theme from "./theme";

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
      textpost: string;
      blogpost: string;
    };
  }
}