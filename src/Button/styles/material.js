import { css } from 'styled-components';
import { ripple } from '../../utils/effects';

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
  padding: 4px 10px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base03};
  background-color: ${theme.base05};
  ` : `
  cursor: pointer;
  color: ${theme.base02};
  background-color: ${theme.base06};
  box-shadow:
    0 2px 2px 0 ${theme.base04},
    0 3px 1px -2px ${theme.base05},
    0 1px 5px 0 ${theme.base05};
  `}

  &:focus:not(:active) {
    background-color: ${theme.base05};
    box-shadow: 0 0 4px ${theme.base05}, 0 4px 8px ${theme.base03};
  }

  ${ripple(theme)}
`;
