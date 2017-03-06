import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import Notification from '../';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Notification
          tooltipPosition={
            select('type', ['primary', 'secondary', 'default',
             'info', 'success', 'warning', 'error'])
          }
          onClose={action('notification closed')}
        >
          {text('Message', 'Hello Notification')}
        </Notification>
      </Container>
    )
  );
