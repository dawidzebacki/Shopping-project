import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 1.6em;
  text-align: center;
  margin: 0 0 1em 0;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const SecondaryTitle = styled.h1`
  font-size: 1.2em;
  text-align: center;
  margin: 0 0 1em 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: ${({ theme }) => theme.colors.inputColor};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBackground};
  transition: border 0.3s ease;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.inputBorderFocus};
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 0 1em 0;
  & > span,
  input {
    white-space: nowrap;
    display: block;
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
  input {
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
  }
  & > span {
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.groupColor};
    background-color: ${({ theme }) => theme.colors.groupBackground};
    border: 1px solid ${({ theme }) => theme.colors.groupBorder};
    transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  }
  &:focus-within {
    & > span {
      color: ${({ theme }) => theme.colors.groupColorFocus};
      background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
      border-color: ${({ theme }) => theme.colors.groupBorderFocus};
    }
  }
  ${({ theme }) => theme.mq.tabletLandscape} {
    width: 75%;
  }
`;

export const Button = styled.button`
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
  &:disabled {
    cursor: not-allowed;
    &:hover {
      color: ${({ theme }) => theme.colors.groupColor};
      background-color: ${({ theme }) => theme.colors.groupBackground};
      border-color: ${({ theme }) => theme.colors.groupBorder};
    }
  }
`;

export const Error = styled.p`
  text-align: center;
  color: red;
  font-size: 0.9em;
`

export const Success = styled.p`
  text-align: center;
  color: limegreen;
  font-size: 0.9em;
`

export const StyledLink = styled.a`
  text-decoration: none;
`

export const StyledLine = styled.hr`
  width: 100%;
  margin: 2em 0 2em 0;
  height: 2px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;