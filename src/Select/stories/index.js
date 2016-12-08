import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, number, boolean } from '@kadira/storybook-addon-knobs';
import Select from '../';
import { options } from './options';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    'Wrapper around [React Select](https://github.com/JedWatson/react-select) with themes and new props like `openOuterUp` and `menuMaxHeight`.',
    () => (
      <div
        style={{
          display: 'flex',
          height: '100%', width: '95%', margin: 'auto',
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <Select
          value={text('value', 'one')}
          menuMaxHeight={number('menuMaxHeight', 200)}
          options={options}
          onChange={action('selected')}
          autosize={boolean('autosize', false)}
          clearable={boolean('clearable', false)}
          disabled={boolean('disabled', false)}
          isLoading={boolean('isLoading', false)}
          multi={boolean('multiselect', false)}
          searchable={boolean('searchable', true)}
          openOuterUp={boolean('openOuterUp', false)}
        />
      </div>
    )
  );
