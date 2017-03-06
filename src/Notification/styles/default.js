import { css } from 'styled-components';
import colorEffect from '../../utils/color';

export const style = ({ theme, primary, disabled, big }) => css`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  margin: auto 10px;
  border: 1px solid ${theme.base02};
  padding: 7px;
  width: 100%;

  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? // eslint-disable-line
  theme.scheme === 'default' && theme.light ? theme.base0B : theme.base04
  : theme.base01};
`;
