import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import styled from 'styled-components';
import Tabs from '../';
import { tabs, simple10Tabs } from './data';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container><Tabs
        tabs={simple10Tabs}
        selected={text('selected', '2')}
        onClick={action('tab selected')}
      /></Container>
    )
  )
  .addWithInfo(
    'with content',
    '',
    () => (
      <Tabs
        tabs={tabs}
        selected={text('selected', 'Tab2')}
        onClick={action('tab selected')}
      />
    )
  );
