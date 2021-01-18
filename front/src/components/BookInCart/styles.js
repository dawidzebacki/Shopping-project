import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1em;
  padding: 1em;
  min-width: 18em;
  max-width: 25em;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
`;


export const Title = styled.p`
  font-size: 1.1em;
  margin: 0 1em 0 0;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const Text = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const Button = styled.button`
  position: absolute;
  font-size: 1.2em;
  top: 5px;
  right: 0;
  color: ${({ theme }) => theme.colors.groupBorder};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.groupBackgroundFocus};
  }
`;
