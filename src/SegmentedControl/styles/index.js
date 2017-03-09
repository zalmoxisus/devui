import { css } from 'styled-components';

export const style = ({ theme, type, disabled }) => css`
  width: 100%;
  margin: auto 0;
  border: 1px solid ${theme.base02};
  padding: 5px 9px;
  ${disabled ? `
  color: ${theme.base04};
  background-color: ${theme.base02};
  opacity: 0.7;
  ` : `
  color: ${theme.base05};
  background-color: ${theme.base02};
  `}
  button {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border: 1px solid ${theme.base03};
    color: ${theme.base05};
    background-color: ${theme.base01};
    padding: 4px 7px;
    margin-left: -1px;
    ${disabled ? `
    cursor: not-allowed;
    ` : `
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${theme.base03};
    }
    `}
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;
