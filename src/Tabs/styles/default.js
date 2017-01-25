import { css } from 'styled-components';

export const style = ({ theme }) => css`
  display: flex;
  flex: 0 0 3em;
  border-top: 1px solid ${theme.base01};
  background-color: ${theme.base01};

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base01};
      color: ${theme.base06};
      padding: 1em 2em;
      border: none;
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      outline: 0;
      transition: all 0.5s;

      &:hover,
      &:focus {
        background-color: ${theme.base00};
        text-shadow: ${theme.base01} 0 1px;
      }
    }

    > [data-selected] {
      background-color: ${theme.base00};
      color: ${theme.base07};
      font-weight: 600;
    }
  }
`;
