import { css } from 'styled-components';
import { ripple } from '../../utils/animations';

export const style = ({ theme, primary, disabled, big }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  margin: 0;
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
  opacity: 0.6;
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base01 : theme.base02};
  background-color: ${primary ? theme.base06 : theme.base07};
  `}
  ${!disabled ? `
    box-shadow:
      0 2px 2px 0 ${theme.base04},
      0 3px 1px -2px ${theme.base05},
      0 1px 5px 0 ${theme.base05};
  ` : ''}

  &:focus:not(:active) {
    background-color: ${theme.base05};
    box-shadow: 0 0 4px ${theme.base05}, 0 4px 8px ${theme.base03};
  }

  & > svg {
    font-size: 1.5em;
    overflow: visible;
  }

  ${ripple(theme)}
`;
