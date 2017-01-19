import React from 'react';
import addons from '@kadira/storybook-addons';
import styled from 'styled-components';
import { EVENT_ID_DATA } from './';
import { Container } from '../../src';

const ContainerStyled = styled(Container)`
  > div {
    height: 100%;
    width: 100%;
      
    > div {
      height: 100%;
      width: 100%;
      overflow-y: auto;
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
      <ContainerStyled themeData={this.state}>
        {this.props.children}
      </ContainerStyled>
    );
  }
}

export const withTheme = story => (
  <Theme>
    {story()}
  </Theme>
);
