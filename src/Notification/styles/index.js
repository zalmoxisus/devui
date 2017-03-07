import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2em;
  margin: auto 10px;
  border: 1px solid ${props => props.theme.base02};
  padding: 7px;
  width: 100%;
  color: ${props => props.type === 'info' ? props.theme.base05 : props.theme.base01};
  background-color: ${props => props.type === 'success' ? props.theme.base0B :
  props.type === 'warning' ? props.theme.base0A :
    props.type === 'error' ? props.theme.base08 :
      props.theme.base01};

  & > svg:first-child {
    font-size: 1.4em;
  }
  & > span {
    width: 100%;
    text-align: center;
    margin: 0 10px 0 10px;
  }
  & > svg:last-child {
    cursor: pointer;
    float: right;
    padding: 1px;
    border: 1px solid rgba(0, 0, 0, 0);
    opacity: 0.8;
  }
  & > svg:last-child:hover {
    opacity: 1;
  }
  & > svg:last-child:active {
    border: 1px solid ${props => props.theme.base02};
  }
`;
