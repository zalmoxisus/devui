import React from 'react';
import Form from '@kadira/storybook-addon-knobs/dist/components/PropForm';
import styled from 'styled-components';
import { EVENT_ID_DATA } from './';
import { defaultState } from './theme';
import { listSchemes, listThemes } from '../../src/themes';

const FormWrapper = styled.div`
  width: 100%;
  padding: 5px;

  label {
    white-space: nowrap;
  }
`;

const schemes = listSchemes();
const themes = listThemes();

export default class Panel extends React.Component {
  state = defaultState;

  onChange = o => {
    const state = { [o.name.split(' ').slice(-1)[0]]: o.value };
    this.props.channel.emit(EVENT_ID_DATA, state);
    this.setState(state);
  }

  render() {
    const { theme, scheme } = this.state;
    return (
      <FormWrapper>
        <Form
          knobs={[
            {
              type: 'select',
              name: 'theme',
              value: theme,
              options: themes
            },
            {
              type: 'select',
              name: 'color scheme',
              value: scheme,
              options: schemes
            }
          ]}
          onFieldChange={this.onChange}
        />
      </FormWrapper>
    );
  }
}
