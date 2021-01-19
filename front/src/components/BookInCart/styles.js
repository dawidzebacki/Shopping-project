import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLine = styled.hr`
  width: 100%;
  margin: 2em 0 2em 0;
  height: 2px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
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
  bottom: 0;
  right: 0;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  border-radius: 6px;
  height: 2em;
  margin: 1em 1em 4em 1em;
  color: ${({ theme }) => theme.colors.groupColor};
  background-color: ${({ theme }) => theme.colors.groupBackground};
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.groupColorFocus};
    background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
    border-color: ${({ theme }) => theme.colors.groupBorderFocus};
  }
`;