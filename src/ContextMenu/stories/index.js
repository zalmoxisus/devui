import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record';
import ContextMenu from '../';
import { items } from './data';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    width: 100%;
    padding: 5px;
    background-color: ${props => props.theme.base01};
    text-align: center;
  }
`;

storiesOf('ContextMenu', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <ContextMenu
          onClick={action('menu item clicked')}
          x={number('x', 100)}
          y={number('y', 100)}
          items={items}
        />
      </Container>
    )
  );
