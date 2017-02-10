import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: hidden;
  overflow-x: hidden;

  > div:nth-child(2) {
    flex: 1;
    overflow-y: auto;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
