import { css } from 'styled-components';
import { ripple } from '../../utils/animations';

export const style = ({ theme, main }) => css`
  display: flex;
  flex: 0 0 1;
  padding-left: 1px;
  background-color: ${theme.base01};
  width: 100%;
  overflow: hidden;
  ${!main && `
  border-top: 1px solid ${theme.base01};
  border-bottom: 1px solid ${theme.base02};
  `}

  > div {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;

    button {
      background-color: ${theme.base01};
      color: ${theme.base07};
      min-height: 30px;
      padding: 0 2em;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      border-bottom: 2px solid transparent;
      text-align: center;
      overflow: hidden;
      outline: 0;
      transition: all 0.5s;

      &:hover,
      &:focus {
        border-bottom: 2px solid ${theme.base03};
        color: ${theme.base04};
      }
      &.collapsed{
        display: none;
      }

      ${ripple(theme)}
    }

    > [data-selected] {
      border-bottom: 2px solid ${theme.base0B};
    }
  }
  > div:nth-child(2) {
    display: block;
    z-index: 10;

    button {
      display: block;
      background: ${theme.base00};
      width: 100%;
    }
  }
`;
