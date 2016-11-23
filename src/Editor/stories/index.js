import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';
import Editor from '../';
import WithTabs from './WithTabs';

const themes = {
  default: 'default',
  night: 'night',
  'solarized dark': 'solarized dark',
  'solarized light': 'solarized light',
  'tomorrow-night-bright': 'tomorrow-night-bright'
};

const value = `
var themes = ${JSON.stringify(themes, null, 2)};

function getThemes() {
  return themes;
}
`;

storiesOf('Editor', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Editor
        theme={select('theme', themes, 'default')}
        value={text('value', value)}
        lineNumbers={boolean('lineNumbers', true)}
        lineWrapping={boolean('lineWrapping', false)}
        foldGutter={boolean('foldGutter', true)}
        readOnly={boolean('readOnly', false)}
        autofocus
      />
    )
  )
  .addWithInfo(
    'with tabs',
    '',
    () => (
      <WithTabs
        value={text('value', value)}
        lineNumbers={boolean('lineNumbers', true)}
      />
    )
  );
