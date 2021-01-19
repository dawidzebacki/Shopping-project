import styled from "styled-components";

export const Container = styled.div`
  min-height: 95vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  max-width: 1360px;
  padding: 1em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.tabletMid} {
		flex-direction: row;
	}
`

export const Wrapper = styled.div`
  flex: 3;
  margin: 5em auto;
  padding: 1em;
  display: flex;
  min-width: 20em;
  position: relative;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const Summary = styled.div`
  position: relative;
  flex: 1;
  padding: 1em;
  margin: 5em auto;
  min-width: 20em;
  width: 100%;
  min-height: 16em;
  max-height: 16em;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const SummaryKeys = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  width: 100%;
`;

export const SummaryButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const SummaryButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  border-radius: 6px;
  height: 2em;
  color: ${({ theme }) => theme.colors.groupColor};
  background: ${({ theme }) => theme.colors.groupBackground};
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  margin: 0 0 0 0.5em;
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

export const DeleteAllButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
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

export const Text = styled.span`
  float: right;
`

export const StyledLine = styled.hr`
  width: 100%;
  padding: 0;
  margin: 3em 0 2em 0;
  height: 2px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

