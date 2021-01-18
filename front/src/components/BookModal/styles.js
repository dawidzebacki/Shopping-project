import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 68em;
  height: 40em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bright};
`;

export const StyledLine = styled.hr`
  width: 100%;
  margin: 2em 0 2em 0;
  height: 2px;
  color: transparent;
  background-color: ${({ theme }) => theme.colors.groupBackground};
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 36.75em;
  max-width: 30em;
  text-align:center;
`;

export const ModalCover = styled.img`
  width: 26.25em;
  height: 36.75em;
  margin: 0 5em 0 0;
`;

export const ModalTitle = styled.h1`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const ModalAuthor = styled.h2`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const TextGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  width: 75%;
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

export const ModalText = styled.p`
  font-size: 0.9em;
  margin: 0 0.5em 0 0.5em;
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const ModalButton = styled.button`
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

export const AddToCartButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  border-radius: 6px;
  height: 2em;
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

export const Error = styled.p`
  color: red;
`

export const Success = styled.p`
  color: limegreen;
`

