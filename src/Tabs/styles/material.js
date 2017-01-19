import { css } from 'styled-components';
import { ripple } from '../../utils/animations';

export const style = ({ theme }) => css`
  display: flex;
  flex: 0 0 3em;

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base02};
      color: ${theme.base07};
      padding: 1em 2em 0.7em;
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

      ${ripple(theme)}
    }

    > [data-selected] {
      border-bottom: 2px solid ${theme.base0B};
    }
  }

  > div:last-child {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1em;
    background-color: ${theme.base02};

    button {
      margin-left: 0.2em;
    }
  }
`;
