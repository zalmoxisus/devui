import React from 'react';
import { ThemeProvider } from 'styled-components';
import addons from '@kadira/storybook-addons';
import { EVENT_ID_DATA } from './';
import { getTheme } from '../../src/themes';

const channel = addons.getChannel();

export const defaultState = {
  theme: 'default',
  scheme: 'default'
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
    {story()}
  </Theme>
);
