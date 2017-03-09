import { css } from 'styled-components';

export const style = ({ theme, type, disabled, align }) => css`
  display: flex;
  width: 100%;
  margin: auto 0;
  border: 1px solid ${theme.base02};
  padding: 5px 9px;
  ${disabled ? `
  color: ${theme.base04};
  background-color: ${theme.base03};
  opacity: 0.7;
  ` : `
  color: ${theme.base05};
  background-color: ${theme.base02};
  `}
  > div:first-child {
    position: absolute;
    margin: 0 5px 0 5px;
    font-size: 1.2em;
    font-weight: 600;
    top: 50%;
    transform: translateY(-50%);
    ${align === 'left' && `
      right: 0;
    `}
    ${align === 'right' && `
      left: 0;
    `}
  }
  > div:last-child {
    display: flex;
    ${align === 'right' && `
      margin-left: auto;
    `}
    ${align === 'left' && `
      margin-right: auto;
    `}
  }
  > div:last-child > [data-selected] {
    background-color: ${theme.base03};
  }
  button {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border: 1px solid ${theme.base03};
    color: ${theme.base05};
    background-color: ${theme.base01};
    padding: 5px 10px;
    margin-left: -1px;
    ${disabled ? `
    cursor: not-allowed;
    ` : `
    cursor: pointer;
    &:hover {
      background-color: ${theme.base02};
    }
    `}
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;
