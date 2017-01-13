import { css } from 'styled-components';

export const style = ({ theme, primary, disabled, toolbar, mark }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 16px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s;
  ${toolbar ? `
  width: 100%;
  min-height: 28px;
  padding: 2px 7px;
  margin: 0;
  border: 1px solid ${theme.base07};
  ` : `
  min-height: 34px;
  padding: 2px 12px;
  margin: 4px 2px;
  border: 1px solid ${theme.base06};
  border-radius: 4px;
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
    font-size: 2em;
  }
  ${mark !== '' && `
    & > svg {
      color: ${theme[`base${mark}`]};
      stroke: ${theme[`base${mark}`]};
      stroke-width: 10;
      stroke-opacity: 0.5;
    }
  `}
`;
