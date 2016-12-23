import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';
import Dialog from '../';

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Dialog
        title={text('title', 'Dialog Title')}
        children={text('children', 'Hello Dialog!')}
        submitText={text('submitText', 'Submit!')}
        open={boolean('open', true)}
        modal={boolean('modal', false)}
        fullWidth={boolean('fullWidth', false)}
        onDismiss={action('dialog dismissed')}
        onSubmit={action('dialog submitted')}
      />
    )
  );
