import { css } from 'styled-components';

export const style = ({ theme, disabled }) => css`
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 16px;
  min-height: 30px;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  padding: 2px 10px;
  transition: all 0.5s;
  border: 1px solid ${theme.base06};
  border-radius: 4px;
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base03};
  background-color: ${theme.base05};
  ` : `
  cursor: pointer;
  color: ${theme.base02};
  background-color: ${theme.base07};
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
`;
