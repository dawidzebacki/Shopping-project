import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
	height: 5vh;
	display: flex;
	justify-content: center;
	width: 100%;
	z-index: 1;
`

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1360px;
	margin: 0 1em;
	display: flex;
	justify-content: flex-end;
	align-items: center;	
`;

export const StyledLink = styled.a`
	text-decoration: none;
	color: white;
	font-size: 1.5em;
	padding: 0;
	margin: 0.1em 0.5em 0 0.5em;
	${({ theme }) => theme.mq.mobileLandscape} {
    font-size: 2em;
  }
`
