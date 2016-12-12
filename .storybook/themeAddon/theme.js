import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import addons from '@kadira/storybook-addons';
import { EVENT_ID_DATA } from './';
import { getTheme } from '../../src/themes';
import { lighten } from '../../src/utils/colorHelpers';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${props => lighten(props.theme.base07, 0.03)};
  color: ${props => props.theme.base00};

  div, input, textarea, keygen, select, button {
   font-family: ${props => props.theme.fontFamily};
 }

 .CodeMirror div {
   font-family: ${props => props.theme.codeFontFamily || props.theme.fontFamily};
 }

  > div {
    height: 100%;
    width: 100%;
      
    > div {
      height: 100%;
      width: 100%;
    }
  }
`;

const channel = addons.getChannel();

export const defaultState = {
  theme: 'default',
  scheme: 'default',
  invert: false
};

class Theme extends React.Component {
  state = defaultState;

  componentDidMount() {
    channel.on(EVENT_ID_DATA, this.onChannel);
  }

  componentWillUnmount() {
    channel.removeListener(EVENT_ID_DATA, this.onChannel);
  }

  onChannel = state => {
    this.setState(state);
  };
  
  render() {
    return (
      <ThemeProvider theme={getTheme(this.state)}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export const withTheme = story => (
  <Theme>
    <Container>
      {story()}
    </Container>
  </Theme>
);
