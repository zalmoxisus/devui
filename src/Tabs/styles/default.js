import { css } from 'styled-components';

export const style = ({ theme, main }) => css`
  display: flex;
  flex: 0 0 30px;
  padding-left: 1px;
  border-top: 1px solid ${theme.base01};
  background-color: ${theme.base01};

  > div:first-child {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    overflow-x: auto;

    button {
      background-color: ${theme.base01};
      color: ${theme.base05};
      letter-spacing: 0.3px;
      min-height: 30px;
      padding: 2px 10px;
      margin-right: 1px;
      border: 2px solid transparent;
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      outline: 0;
      transition: all 0.5s;

      &:hover,
      &:focus {
        background-color: ${main ? theme.base02 : theme.base00};
        text-shadow: ${theme.base01} 0 1px;
      }
    }

    > [data-selected] {
      ${main ?
      `border-bottom: 2px solid ${theme.base0B};` :
      `background-color: ${theme.base00};`
      }
      color: ${theme.base07};
    }
  }
`;
