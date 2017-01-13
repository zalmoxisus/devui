import { css } from 'styled-components';
const type = 'base';
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
  font-size: 16px;
  ${toolbar ? `
  width: 100%;
  min-height: 28px;
  padding: 2px 7px;
  margin: 0;
  border: 1px solid ${theme.base07};
  ` : `
  padding: 2px 12px;
    margin: 4px 2px;
    border: 1px solid ${theme.base06};
    border-radius: 4px;
  min-height: 34px;
  `}
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base03};
  opacity: 0.7;
  background-color: ${theme.base05};
  border: 1px solid ${theme.base05};
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base01 : theme.base02};
  background-color: ${primary ? theme.base06 : theme.base07}
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

  ${mark !== '' ? `
    & > svg {
      color: ${theme[type + mark]};
      stroke: ${theme.base0A};
      stroke-width: 5;
      stroke-opacity: 0.7;
    }
    ` : `
    & > svg:hover, & > svg:focus {
      color: ${theme.base00};
    }
  `}
`;
