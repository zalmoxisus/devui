import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';
import Tabs from '../';
import { tabs } from './data';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Tabs
        tabs={tabs}
        selected={text('selected', 'Tab2')}
        compact={boolean('compact', false)}
        onClick={action('tab selected')}
      />
    )
  )
;
