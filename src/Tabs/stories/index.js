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
  .addWithInfo(
    'with buttons',
    '',
    () => (
      <Tabs
        tabs={tabs}
        selected={text('selected', 'Tab2')}
        compact={boolean('compact', false)}
        onClick={action('tab selected')}
        buttons={[
          <button key="button1" onClick={action('clicked button1')}>Button 1</button>,
          <button key="button2" onClick={action('clicked button2')}>Button 2</button>
        ]}
      />
    )
  );
