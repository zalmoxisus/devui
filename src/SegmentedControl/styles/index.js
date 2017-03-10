import { css } from 'styled-components';
import color from '../../utils/color';

export const style = ({ theme, disabled }) => css`
  display: flex;
  background-color: ${theme.base02};
  > div {
    display: flex;
    overflow: hidden;
    padding-left: 1px;
  }
  > div > [data-selected] {
    background-color: ${color(theme.base03, 'alpha', 0.2)};
  }
  > div > button {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border: 1px solid ${color(theme.base03, 'alpha', 0.5)};
    padding: 5px 10px;
    margin-left: -1px;
    ${disabled ? `
    cursor: not-allowed;
    color: ${theme.base04};
    opacity: 0.7;
    ` : `
    cursor: pointer;
    color: ${theme.base05};
    background-color: ${theme.base01};
    &:hover {
      background-color: ${color(theme.base03, 'alpha', 0.4)};
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
