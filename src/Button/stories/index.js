import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';
import Button from '../';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Button
        disabled={boolean('Disabled', false)}
        onClick={action('button clicked')}
      >
        {text('Label', 'Hello Button')}
      </Button>
    )
  );
