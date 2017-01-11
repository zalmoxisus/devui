import { css } from 'styled-components';

export const style = ({ theme }) => css`
  display: flex;
  flex: 0 0 3em;
  border-top: 1px solid ${theme.base05};

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base06};
      color: ${theme.base01};
      padding: 1em 2em;
      border: none;
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      outline: 0;
      transition: all 0.5s;

      &:hover,
      &:focus {
        background-color: ${theme.base07};
        text-shadow: ${theme.base06} 0 1px;
      }
    }

    > [data-selected] {
      background-color: transparent;
      color: ${theme.base00};
      font-weight: 600;
    }
  }

  > div:last-child {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1em;
    background-color: ${theme.base05};
    border-bottom: 1px solid ${theme.base06};

    button {
      margin-left: 0.2em;
    }
  }
`;
