import styled from "styled-components";

export const BlogPostContainer = styled.div`
	margin: 70px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	width: 300px;
	box-sizing: border-box;

	@media only screen and (min-width: 768px) {
		width: 650px;
  }

	@media only screen and (min-width: 1440px) {
		width: 1600px;
  }
`
export const BlogPost = styled.div`
	width: 300px;
	background-color: ${props => props.theme.colors.blogpost};
	padding: 10px;
	margin: 10px;
	border-radius:5px;
	flex-direction: column;
	box-shadow: 0 .2rem 1rem rgba(0,0,0,.15)!important;
	display: flex;
`

export const BlogPostImg = styled.div`
	position: relative;
	display: flex;
	width: auto;
	height: 300px;
	margin: 0 0 10px;
`

export const BlogPostText = styled.div`
	text-align: left;
	color: ${props => props.theme.colors.textpost};
	font-size:12px;
	text-align: justify;
	padding: 10px 0;
	text-justify: inter-word;
	border-top: 1px solid ${props => props.theme.colors.border};
`