import styled from 'styled-components';
import color from '../../utils/color';

export const ContainerWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${props => color(props.theme.base00, 'lighten', 0.03)};
  color: ${props => props.theme.base07};
  flex-flow: column nowrap;

  div, input, textarea, keygen, select, button {
   font-family: ${props => props.theme.fontFamily};
 }

 .CodeMirror div {
   font-family: ${props => props.theme.codeFontFamily || props.theme.fontFamily};
 }
`;
