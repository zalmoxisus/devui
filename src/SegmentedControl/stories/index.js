import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';
import SegmentedControl from '../';

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
          values={['Button1', 'Button2', 'Button3']}
          selected={text('selected', 'Button1')}
          onClick={action('button selected')}
          disabled={boolean('Disabled', false)}
        />
      </Container>
    )
  );
