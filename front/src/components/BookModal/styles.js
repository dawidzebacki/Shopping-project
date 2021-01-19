import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 20em;
  height: 34em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bright};
  ${({ theme }) => theme.mq.tabletLandscape} {
		width: 68em;
    height: 40em;
	}
`;

export const StyledLine = styled.hr`
  width: 100%;
  margin: 2em 0 2em 0;
  height: 2px;
  border: none;
  background-color: ${({ theme }) => theme.colors.groupBackground};
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin-top: 5em;
  padding: 1em;
  text-align: center;
  ${({ theme }) => theme.mq.tabletLandscape} {
    margin: 0;
    padding: 0;
    height: 36.75em;
    max-width: 30em;
  }
`;

export const ModalCover = styled.img`
  display: none;
  ${({ theme }) => theme.mq.tabletLandscape} {
    display: block;
    width: 26.25em;
    height: 36.75em;
    margin: 0 5em 0 0;
  }
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
  background-color: ${({ theme }) => theme.colors.groupBackground};
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.groupColorFocus};
    background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
    border-color: ${({ theme }) => theme.colors.groupBorderFocus};
  }
`;
