import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow-y: hidden;

  > div:first-child {
    display: flex;
    flex: 0 0 3em;

    > div:first-child {
      display: flex;
      align-items: flex-end;
      flex-wrap: nowrap;
      overflow-x: auto;

      button {
        padding: ${props => (props.compact ? '0.8em 1em' : '1em 2em')};
        border: none;
        cursor: pointer;
        background-color: rgba(190, 190, 190, 0.2);
        text-align: center;
        overflow: hidden;
        outline: 0;
        transition: all 0.5s;
        color: inherit;

        &:hover,
        &:focus {
          background-color: rgba(190, 190, 190, 0.4);
        }
      }

      > [data-selected] {
        background-color: transparent;
      }
    }

    > div:last-child {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 1em;
      background-color: rgba(190, 190, 190, 0.2);

      button {
        margin-left: 0.2em;
      }
    }
  }

  > div:last-child {
    flex: 1;
    overflow-y: auto;
    position: relative;
  }
`;
