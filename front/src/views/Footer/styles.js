import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
	height: 5vh;
	display: flex;
`

export const Wrapper = styled.div`
	max-width: 1360px;
	margin: auto;
`;

