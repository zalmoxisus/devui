import styled from 'styled-components';

const Toolbar = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  background-color: ${props => props.theme.base02};
  text-align: center;
  
  & > div {
    margin: 0 1px;
  }
  
  & button {
    border-radius: 0;
    white-space: nowrap;
  }

  & > .Select {
    margin: 0 1px;
    flex-grow: 1;
    
    .Select-control {
      cursor: pointer;
      border-radius: 0 !important;
    }
  }
`;

export default Toolbar;
