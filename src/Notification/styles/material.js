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
  border: 1px solid ${theme.base02};
  text-transform: uppercase;
   margin: auto 10px;
  padding: 7px;
  width: 100%;

  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? theme.base04 : theme.base01};

  ${ripple(theme)}
`;
