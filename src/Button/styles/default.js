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
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base04};
  background-color: ${theme.base02};
  opacity: 0.7;
  ` : `
  cursor: pointer;
  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? // eslint-disable-line
    theme.scheme === 'default' && theme.light ? theme.base0B : theme.base04
    : theme.base01};
  `}

  &:hover,
  &:focus {
    background-color: ${primary ? colorEffect(theme.base0B, 'darken', 0.2) : theme.base02};
    box-shadow: 1px 1px 2px ${theme.base03};
  }
  &:focus {
    border: 1px solid ${theme.base0D};
  }
  &:active {
    border: 1px solid ${theme.base03};
    box-shadow: 1px 1px 2px ${theme.base04};
  }
`;
