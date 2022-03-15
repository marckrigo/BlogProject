import styled from "styled-components";

export const BlogFooter = styled.footer`
  color: ${props => props.theme.colors.textpost};
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  z-index: 1;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border};
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  & svg {
    width: 20px;
  }

  & p {
    font-size: 12px;
    padding: 0 6px;
    color: #444;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
      flex-direction: row;
    }
  }

  & span {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
		width: 650px;
    gap: 0;

    & span {
      display: inline-block;
    }
  }
`

export const CurrentPlaying = styled.div`
  font-size: 10px;
  padding: 0 6px;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`