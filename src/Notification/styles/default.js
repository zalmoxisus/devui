import { css } from 'styled-components';
import colorEffect from '../../utils/color';

export const style = ({ theme, primary, disabled, big }) => css`
  font-weight: 600;
  font-size: 1.2em;
  margin: auto 10px;
  border: 1px solid ${theme.base02};
  padding: 7px;
  width: 100%;
  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? // eslint-disable-line
  theme.scheme === 'default' && theme.light ? theme.base0B : theme.base04
  : theme.base01};

  & > svg {
    cursor: pointer;
    float: right;
    padding: 1px;
    border: 1px solid rgba(0, 0, 0, 0);
    opacity: 0.8;
  }
  & > svg:hover {
    opacity: 1;
  }
  & > svg:active {
    border: 1px solid ${theme.base02};
  }
`;
