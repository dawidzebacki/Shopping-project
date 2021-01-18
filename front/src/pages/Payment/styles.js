import styled from 'styled-components';

export const Container = styled.div`
	min-height: 95vh;
	display: flex;
`

export const Wrapper = styled.div`
	max-width: 1360px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
	margin: auto;
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
    background: ${({ theme }) => theme.colors.groupBackground};
    border: 1px solid ${({ theme }) => theme.colors.groupBorder};
    transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  }
  &:focus-within {
    & > span {
      color: ${({ theme }) => theme.colors.groupColorFocus};
      background: ${({ theme }) => theme.colors.groupBackgroundFocus};
      border-color: ${({ theme }) => theme.colors.groupBorderFocus};
    }
  }
`;

export const SendButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  border-radius: 6px;
  height: 2em;
  margin: 0 0 0 0.5em;
  color: ${({ theme }) => theme.colors.groupColor};
  background: ${({ theme }) => theme.colors.groupBackground};
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  float: right;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.groupColorFocus};
    background: ${({ theme }) => theme.colors.groupBackgroundFocus};
    border-color: ${({ theme }) => theme.colors.groupBorderFocus};
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`
