import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow-y: hidden;

  > div:nth-child(2) {
    flex: 1;
    overflow-y: auto;
    position: relative;
  }
`;
