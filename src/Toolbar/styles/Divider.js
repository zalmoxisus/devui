import styled from 'styled-components';

const Divider = styled.div`
  background-color: ${props => props.theme.base05};
  box-shadow: 1px 1px 2px ${props => props.theme.base07};
  height: ${props => props.theme.inputHeight}px;
  width: 1px;
  margin: 0 3px !important;
`;

export default Divider;
