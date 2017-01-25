import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record';
import ContextMenuTrigger from '../';
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
        <ContextMenuTrigger
          onClick={action('menu item clicked')}
          leftClick={boolean('leftClick', true)}
          rightClick={boolean('rightClick', true)}
          items={items}
        >
          {text('Label', 'ContextMenu')}
        </ContextMenuTrigger>
      </Container>
    )
  );
