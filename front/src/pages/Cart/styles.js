import styled from "styled-components";

export const Container = styled.div`
  min-height: 95vh;
`;

export const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 4em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Summary = styled.div`
  position: relative;
  max-width: 1360px;
  margin: 5em auto;
  padding: 1em;
  width: 30em;
  height: 18em;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.groupBorder};
  color: ${({ theme }) => theme.colors.groupBackgroundFocus};
`;

export const SummaryKeys = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  width: 75%;
`;
export const SummaryProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 25%;
  line-height: 2em;
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
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  margin: 0 0 0 0.5em;
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
