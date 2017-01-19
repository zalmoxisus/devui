import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record';
import { Toolbar, Divider, Spacer, Button, Select } from '../../';
import { options } from '../../Select/stories/options';


export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('Toolbar', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Toolbar>
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
          <Button
            title={text('Title', 'Hello Tooltip')}
            tooltipPosition={
              select('tooltipPosition', ['top', 'bottom', 'left', 'right',
                'bottom-left', 'bottom-right', 'top-left', 'top-right'])
            }
            disabled={boolean('Disabled', false)}
            onClick={action('button clicked')}
          >
            <MdFiberManualRecord />
          </Button>
          <Divider />
          <Spacer />
          <Select options={options} />
        </Toolbar>
      </Container>
    )
  );
