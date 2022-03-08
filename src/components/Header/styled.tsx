import styled from "styled-components";

export const BlogHeader = styled.nav`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`