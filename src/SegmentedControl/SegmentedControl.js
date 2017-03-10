import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const SegmentedWrapper = getStyles(style, 'div');

export default class SegmentedControl extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.disabled !== this.props.disabled ||
      nextProps.selected !== this.props.selected;
  }

  onClick = e => {
    this.props.onClick(e.target.value);
  };

  getButtons = () => {
    const buttons = this.props.buttons;
    const selected = this.props.selected;

    return buttons.map(button => {
      let isSelected;
      if (button === selected) {
        isSelected = true;
      }
      return (
        <button
          key={button}
          value={button}
          data-selected={isSelected}
          onClick={this.onClick}
        >
          {button}
        </button>
      );
    });
  };

  render() {
    return (
      <SegmentedWrapper disabled={this.props.disabled}>
        <div>
          {this.getButtons()}
        </div>
      </SegmentedWrapper>
    );
  }
}

SegmentedControl.propTypes = {
  buttons: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
