import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, number, text, boolean } from '@kadira/storybook-addon-knobs';
import Slider from '../';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Slider
          value={number('value', 0)}
          min={number('min', 0)}
          max={number('max', 100)}
          label={text('label', 'Hello Slider')}
          withValue={boolean('withValue', false)}
          disabled={boolean('disabled', false)}
          onChange={action('slider changed')}
        />
      </Container>
    )
  );
