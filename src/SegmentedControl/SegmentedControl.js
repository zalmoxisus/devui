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

  onMouseUp = e => {
    e.target.blur();
  };

  render() {
    const { buttons, selected } = this.props;
    return (
      <SegmentedWrapper disabled={this.props.disabled} theme={this.props.theme}>
        {buttons.map(button => (
          <button
            key={button}
            value={button}
            data-selected={button === selected ? true : undefined}
            onMouseUp={this.onMouseUp}
            onClick={this.onClick}
          >
            {button}
          </button>
        ))}
      </SegmentedWrapper>
    );
  }
}

SegmentedControl.propTypes = {
  buttons: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.object
};
