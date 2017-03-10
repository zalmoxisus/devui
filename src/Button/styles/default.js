import { css } from 'styled-components';
import colorEffect from '../../utils/color';

export const style = ({ theme, primary, disabled, big }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s;
  margin: auto 0;
  border: 1px solid ${theme.base02};
  border-radius: 4px;
  ${big ? `
  min-height: 34px;
  padding: 2px 12px;
  ` : `
  min-height: 30px;
  padding: 2px 7px;
  `}
  ${primary ? `
  background-color: ${theme.scheme === 'default' && theme.light ? theme.base0B : theme.base04};
  color: ${theme.base00};
  ` : `
  background-color: ${theme.base01};
  color: ${theme.base05};
 `}
  ${disabled ? `
  cursor: not-allowed;
  opacity: 0.6;
  ` : `
  cursor: pointer;
  `}

  ${!disabled && `
  &:hover,
  &:focus {
    background-color: ${primary ? colorEffect(theme.base0B, 'darken', 0.2) : theme.base02};
    box-shadow: 1px 1px 2px ${theme.base03};
  }
 `}
  &:focus {
    border: 1px solid ${theme.base0D};
  }
  &:active {
    border: 1px solid ${theme.base03};
    box-shadow: 1px 1px 2px ${theme.base04};
  }
`;
