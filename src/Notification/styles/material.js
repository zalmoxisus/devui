import { css } from 'styled-components';

export const style = ({ theme, primary, disabled, big }) => css`
  font-family: inherit;
  font-weight: 600;
  border: 1px solid ${theme.base02};
  text-transform: uppercase;
  margin: auto 10px;
  padding: 7px;
  width: 100%;
  color: ${primary ? theme.base00 : theme.base05};
  background-color: ${primary ? theme.base04 : theme.base01};

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
