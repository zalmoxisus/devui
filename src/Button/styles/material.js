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
  color: ${theme.base04};
  background-color: ${theme.base02};
  opacity: 0.6;
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? theme.base04 : theme.base01};
  `}
  ${!disabled ? `
    box-shadow:
      0 2px 2px 0 ${theme.base03},
      0 3px 1px -2px ${theme.base02},
      0 1px 5px 0 ${theme.base02};
  ` : ''}

  &:focus:not(:active) {
    background-color: ${theme.base02};
    box-shadow: 0 0 4px ${theme.base02}, 0 4px 8px ${theme.base04};
  }

  ${ripple(theme)}
`;
