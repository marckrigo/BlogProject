import styled from "styled-components";

export const BlogPostContainer = styled.div`
	margin: 30px 30px;
	overflow: auto;
	text-align: center;
`
export const BlogPost = styled.div`
	height: 600px;
	width: 400px;
	background-color: ${props => props.theme.colors.blogpost};
	display: inline-block;
	padding: 10px;
	margin: 10px;
	border-radius:5px;
	border: 1px solid ${props => props.theme.colors.border};

	img {
		width: 100%;
		height: 80%;
		padding:0 0 10px;
	}
`

export const BlogPostText = styled.div`
	width: 100%;
	text-align: left;
	color: ${props => props.theme.colors.textpost};
	font-size:14px;
	text-align: justify;
	padding: 10px 0;
	text-justify: inter-word;
	border-top: 1px solid ${props => props.theme.colors.border};
`