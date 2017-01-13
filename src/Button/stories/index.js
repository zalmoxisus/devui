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

  .wrapper {
    display: flex;
    width: 100%;
    padding: 5px;
    background-color: ${props => props.theme.base06};
    text-align: center;
  }
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Button
          title={text('Title', 'Hello Tooltip')}
          tooltipPosition={select('tooltipPosition', ['top', 'bottom', 'left', 'right'])}
          disabled={boolean('Disabled', false)}
          onClick={action('button clicked')}
        >
          {text('Label', 'Hello Button')}
        </Button>
      </Container>
    )
  )
  .addWithInfo(
    'toolbar',
    '',
    () => (
      <Container>
        <div className="wrapper">
          <Button
            toolbar
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={select('tooltipPosition', ['top', 'bottom', 'left', 'right'])}
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            {text('Label', 'Hello Button')}
          </Button>
          <Button
            toolbar
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={select('tooltipPosition', ['top', 'bottom', 'left', 'right'])}
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            {text('Label', 'Hello Button')}
          </Button>
          <Button
            toolbar
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={select('tooltipPosition', ['top', 'bottom', 'left', 'right'])}
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            {text('Label', 'Hello Button')}
          </Button>
        </div>
      </Container>
    )
  )
  .addWithInfo(
    'mark',
    '',
    () => (
      <Container>
        <Button
          mark
          title={text('Title', 'Hello Tooltip')}
          tooltipPosition={select('tooltipPosition', ['top', 'bottom', 'left', 'right'])}
          disabled={boolean('Disabled', false)}
          onClick={action('button clicked')}
          mark={text('mark', '08')}
        >
          <MdFiberManualRecord />
        </Button>
      </Container>
    )
  );
