import styled from 'styled-components';

export const Container = styled.div`
	/* height: 100vh; */
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Wrapper = styled.div`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 0;
	display: flex;
	justify-content: center	;
    flex-wrap: wrap;
`;

export const WrapperButtons = styled.div`
	max-width: 1360px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  border-radius: 6px;
  height: 2em;
  margin: 1em 1em 4em 1em;
  color: ${({ theme }) => theme.colors.groupColor};
  background: ${({ theme }) => theme.colors.groupBackground};
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.groupColorFocus};
    background: ${({ theme }) => theme.colors.groupBackgroundFocus};
    border-color: ${({ theme }) => theme.colors.groupBorderFocus};
  }
`;