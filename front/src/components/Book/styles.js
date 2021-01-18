import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 1em 2em 1em;
  padding: 2em 0.5em 2em 0.5em;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  max-width: 18.1em;

  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;


export const Cover = styled.img`
  width: 15em;
  height: 21em;
`;

export const Title = styled.h1`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const Author = styled.h2`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;