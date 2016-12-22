import { css } from 'styled-components';
import { ripple } from '../../utils/effects';

export const style = ({ theme, disabled, toolbar }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 16px;
  text-decoration: none;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  ${toolbar ? `
  width: 100%;
  min-height: 28px;
  padding: 2px 7px;
  margin: 0;
  ` : `
  min-height: 34px;
  padding: 2px 12px;
  margin: 4px 2px;
  border-radius: 2px;
  `}
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base03};
  background-color: ${theme.base05};
  opacity: 0.6;
  ` : `
  cursor: pointer;
  color: ${theme.base02};
  background-color: ${theme.base06};
  `}
  ${!toolbar && !disabled ? `
    box-shadow:
      0 2px 2px 0 ${theme.base04},
      0 3px 1px -2px ${theme.base05},
      0 1px 5px 0 ${theme.base05};
  ` : ''}

  &:focus:not(:active) {
    background-color: ${theme.base05};
    box-shadow: 0 0 4px ${theme.base05}, 0 4px 8px ${theme.base03};
  }

  &:hover {
    ${toolbar ? `background-color: ${theme.base05};` : ''}
  }

  ${ripple(theme)}
`;
