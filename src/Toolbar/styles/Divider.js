import styled from 'styled-components';

const Divider = styled.div`
  background-color: ${props => props.theme.base02};
  box-shadow: 1px 1px 2px ${props => props.theme.base00};
  height: ${props => props.theme.inputHeight}px;
  width: 1px;
  margin: 0 3px !important;
`;

export default Divider;
