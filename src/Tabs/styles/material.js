import { css } from 'styled-components';
import { ripple } from '../../utils/animations';

export const style = ({ theme }) => css`
  display: flex;
  flex: 0 0 3em;
  background-color: ${theme.base01};

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base01};
      color: ${theme.base07};
      padding: 0 2em 0.9em;
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
`;
