import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, object } from '@kadira/storybook-addon-knobs';
import Dialog from '../';
import { schema, uiSchema, formData } from '../../Form/stories/schema';

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
  )
  .addWithInfo(
    'with form',
    '',
    () => (
      <Dialog
        open={boolean('open', true)}
        fullWidth={boolean('fullWidth', false)}
        submitText={text('submitText', 'Submit!')}
        formData={object('formData', formData)}
        schema={object('schema', schema)}
        uiSchema={object('uiSchema', uiSchema)}
        onChange={action('form changed')}
        onSubmit={action('form submitted')}
        onDismiss={action('dialog dismissed')}
      />
    )
  );
