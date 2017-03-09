import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import SegmentedControl from '../';
import { tabs } from './data';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('SegmentedControl', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <SegmentedControl
          disabled={boolean('Disabled', false)}
          onClick={action('tab selected')}
          tabs={tabs}
          align={select('align', ['left', 'right'])}
          selected={text('selected', 'Tab1')}
        />
      </Container>
    )
  );
