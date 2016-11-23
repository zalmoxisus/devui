import React, { Component } from 'react';
import Editor from '../';
import Tabs from '../../Tabs';

/* eslint-disable react/prop-types */
export default class WithTabs extends Component {
  state = {
    selected: 'Light'
  };

  render() {
    const { value, lineNumbers } = this.props;
    return (
      <Tabs
        tabs={[
          {
            name: 'Dark',
            component: Editor,
            selector: () => ({ theme: 'solarized dark', value, lineNumbers })
          },
          {
            name: 'Light',
            component: Editor,
            selector: () => ({ theme: 'solarized light', value, lineNumbers })
          }
        ]}
        selected={this.state.selected}
        onClick={selected => { this.setState({ selected }); }}
      />
    );
  }
}
