import { css } from 'styled-components';
import { ripple } from '../../utils/animations';

export const style = ({ theme, main }) => css`
  display: flex;
  flex: 0 0 30px;
  background-color: ${theme.base01};

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base01};
      color: ${theme.base07};
      min-height: 30px;
      padding: 0 2em;
      ${main && 'text-transform: uppercase;'}
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
      border-bottom: 2px solid ${theme.base0D};
    }
  }
`;
