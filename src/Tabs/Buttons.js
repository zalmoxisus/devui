import React, { Component, PropTypes } from 'react';

export default class Buttons extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div>{this.props.buttons}</div>;
  }
}

Buttons.propTypes = { buttons: PropTypes.array };

Buttons.defaultProps = { buttons: [] };
