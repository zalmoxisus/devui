import { css } from 'styled-components';

export const style = ({ theme, primary, disabled, big }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s;
  margin: 0;
  border: 1px solid ${theme.base01};
  border-radius: 4px;
  ${big ? `
  min-height: 34px;
  padding: 2px 12px;
  ` : `
  min-height: 30px;
  padding: 2px 7px;
  `}
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base04};
  background-color: ${theme.base02};
  border: 1px solid ${theme.base02};
  opacity: 0.7;
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base01 : theme.base05};
  background-color: ${primary ? theme.base06 : theme.base00};
  `}

  &:hover,
  &:focus {
    border: 1px solid ${theme.base02};
    background-color: ${theme.base01};
    box-shadow: 1px 1px 2px ${theme.base02};
  }
  &:active {
    background-color: ${theme.base02};
    border: 1px solid ${theme.base03};
  }

  & > svg {
    font-size: 1.5em;
    overflow: visible;
  }
`;
