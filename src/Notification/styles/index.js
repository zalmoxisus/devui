import { css } from 'styled-components';

export const style = ({ theme, type }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2em;
  margin: auto 10px;
  border: 1px solid ${props => props.theme.base02};
  padding: 7px;
  width: 100%;
  color: ${type === 'info' ? theme.base05 : theme.base01};
  background-color: ${type === 'success' ? theme.base0B : // eslint-disable-line
  type === 'warning' ? theme.base0A : // eslint-disable-line
    type === 'error' ? theme.base08 :
      theme.base01};

  & > svg:first-child {
    font-size: 1.4em;
  }
  & > span {
    width: 100%;
    text-align: center;
    margin: 0 10px 0 10px;
  }
  & > svg:last-child {
    cursor: pointer;
    float: right;
    padding: 1px;
    border: 1px solid rgba(0, 0, 0, 0);
    opacity: 0.8;
  }
  & > svg:last-child:hover {
    opacity: 1;
  }
  & > svg:last-child:active {
    border: 1px solid ${props => props.theme.base02};
  }
`;
