import { css } from 'styled-components';

const getBackground = (theme, type) => {
  switch (type) {
    case 'success':
      return `
      background-color:  ${theme.base0B};
      `;
    case 'warning':
      return `
      background-color:  ${theme.base0A};
      `;
    case 'error':
      return `
      background-color:  ${theme.base08};
      `;
    default:
      return `
       background-color:  ${theme.base01};
      `;
  }
};

export const style = ({ theme, type }) => css`
  display: flex;
  font-weight: 600;
  font-size: 1.2em;
  margin: auto 10px;
  border: 1px solid ${theme.base02};
  padding: 7px;
  width: 100%;
  color: ${type === 'info' ? theme.base05 : theme.base01};
  ${getBackground(theme, type)}

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
    border: 1px solid ${theme.base02};
  }
`;
