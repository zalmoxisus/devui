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
  border: 1px solid ${theme.base06};
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
  color: ${theme.base03};
  background-color: ${theme.base05};
  border: 1px solid ${theme.base05};
  opacity: 0.7;
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base01 : theme.base02};
  background-color: ${primary ? theme.base06 : theme.base07};
  `}

  &:hover,
  &:focus {
    border: 1px solid ${theme.base05};
    background-color: ${theme.base06};
    box-shadow: 1px 1px 2px ${theme.base05};
  }
  &:active {
    background-color: ${theme.base05};
    border: 1px solid ${theme.base04};
  }

  & > svg {
    font-size: 1.5em;
    overflow: visible;
  }
`;
