import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import Notification from '../';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <Notification
          type={
            select('type', ['info', 'success', 'warning', 'error'], 'warning')
          }
          onClose={action('notification closed')}
        >
          {text('Message', 'Hello Notification')}
        </Notification>
      </Container>
    )
  );
