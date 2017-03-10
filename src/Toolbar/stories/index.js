import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, number, boolean, select } from '@kadira/storybook-addon-knobs';
import PlayIcon from 'react-icons/lib/md/play-arrow';
import RecordIcon from 'react-icons/lib/md/fiber-manual-record';
import LeftIcon from 'react-icons/lib/md/keyboard-arrow-left';
import RightIcon from 'react-icons/lib/md/keyboard-arrow-right';
import { Toolbar, Divider, Spacer, Button, Select, Slider } from '../../';
import { options } from '../../Select/stories/options';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SliderContainer = styled.div`
  width: 90%;
  button {
    background-color: ${props => props.theme.base01};

    > svg {
      font-size: 3em;
    }
  }
  .Select {
    width: 75px;

    .Select-control {
      text-align: left;
    }
  }
`;

storiesOf('Toolbar', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Toolbar borderPosition={select('borderPosition', ['top', 'bottom'])}>
          <Button
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={
              select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                'bottom-left', 'bottom-right', 'top-left', 'top-right'])
            }
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            {text('Label', 'Hello Button')}
          </Button>
          <Divider />
          <Button
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={
              select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                'bottom-left', 'bottom-right', 'top-left', 'top-right'])
            }
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            <RecordIcon />
          </Button>
          <Divider />
          <Spacer />
          <Select options={options} />
        </Toolbar>
      </Container>
    )
  )
  .addWithInfo(
    'with slider',
    '',
    () => (
      <Container>
        <SliderContainer>
          <Toolbar noBorder compact>
            <Button
              title={text('play title', 'Play')}
              tooltipPosition={
                select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                  'bottom-left', 'bottom-right', 'top-left', 'top-right'])
              }
              disabled={boolean('Disabled', false)}
              onClick={action('button clicked')}
            >
              <PlayIcon />
            </Button>
            <Slider
              value={number('value', 80)}
              min={number('min', 0)}
              max={number('max', 100)}
              label={text('label', 'Slider label')}
              withValue={boolean('withValue', false)}
              disabled={boolean('disabled', false)}
              onChange={action('slider changed')}
            />
            <Button
              title="Previous state"
              tooltipPosition={
                select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                  'bottom-left', 'bottom-right', 'top-left', 'top-right'])
              }
              disabled={boolean('Disabled', true)}
              onClick={action('previous state clicked')}
            >
              <LeftIcon />
            </Button>
            <Button
              title="Next state"
              tooltipPosition={
                select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                  'bottom-left', 'bottom-right', 'top-left', 'top-right'])
              }
              disabled={boolean('Disabled', false)}
              onClick={action('next state clicked')}
            >
              <RightIcon />
            </Button>
            <Select
              options={[
                { value: 'live', label: 'live' }, { value: '1x', label: '1x' }
              ]}
              openOuterUp
              searchable={false}
              value="live"
            />
          </Toolbar>
        </SliderContainer>
      </Container>
    )
  );
