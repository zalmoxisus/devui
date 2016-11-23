import React, { Component, PropTypes } from 'react';
import Buttons from './Buttons';

export default class TabsHeader extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs || nextProps.buttons !== this.props.buttons;
  }

  render() {
    return (
      <div>
        <div>{this.props.tabs}</div>
        <Buttons buttons={this.props.buttons} />
      </div>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  buttons: PropTypes.array
};
