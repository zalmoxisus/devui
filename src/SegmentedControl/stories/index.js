import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import { Toolbar, Button } from '../../';
import SegmentedControl from '../';
import { buttons } from './data';

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
          buttons={buttons}
          selected={text('selected', 'Button1')}
          align={select('align', ['left', 'right'])}
          onClick={action('button selected')}
          disabled={boolean('Disabled', false)}
        />
      </Container>
    )
  );
