import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record';
import Button from '../';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Button
          title={text('Title', 'Hello Tooltip! \\a And from new line hello!')}
          tooltipPosition={
            select('tooltipPosition', ['top', 'bottom', 'left', 'right',
             'bottom-left', 'bottom-right', 'top-left', 'top-right'])
          }
          primary={boolean('primary', true)}
          size={select('size', ['big', 'normal', 'small'], 'normal')}
          disabled={boolean('Disabled', false)}
          onClick={action('button clicked')}
        >
          {text('Label', 'Hello Button')}
        </Button>
      </Container>
    )
  )
  .addWithInfo(
    'mark',
    '',
    () => (
      <Container>
        <Button
          mark={select('mark', ['base08', 'base09', 'base0A', 'base0B',
            'base0C', 'base0D', 'base0E', 'base0F'], 'base08')}
          title={text('Title', 'Hello Tooltip')}
          tooltipPosition={
            select('tooltipPosition', ['top', 'bottom', 'left', 'right',
             'bottom-left', 'bottom-right', 'top-left', 'top-right'])
          }
          size={select('size', ['big', 'normal', 'small'], 'normal')}
          disabled={boolean('Disabled', false)}
          onClick={action('button clicked')}
        >
          <MdFiberManualRecord />
        </Button>
      </Container>
    )
  );
