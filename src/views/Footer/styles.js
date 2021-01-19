import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
  height: 5vh;
  display: flex;
`;

export const Wrapper = styled.div`
  max-width: 1360px;
  display: flex;
  margin: auto;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  color: white;
`;

export const TextSpan = styled.span`
  color: red;
  font-size: 1.1em;
`;

export const Icons = styled.div`
	font-size: 1.1em;
  margin: 0 0 0 2em;
  display: flex;
`

export const Icon = styled.div`
  margin: 0 0.25em;
  color: black;
`
