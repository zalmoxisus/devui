import { css } from 'styled-components';
import colorEffect from '../../utils/color';

export const style = ({ theme, type }) => css`
  font-weight: 600;
  font-size: 1.2em;
  margin: auto 10px;
  border: 1px solid ${theme.base02};
  padding: 7px;
  width: 100%;
  color: ${type === 'info' ? theme.base05 : theme.base01};
  background-color: ${type === 'success' ? theme.base0B :
    type === 'warning' ? theme.base0A :
      type === 'error' ? theme.base08 :
        theme.base01};

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
