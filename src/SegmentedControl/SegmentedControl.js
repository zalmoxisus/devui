import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const SegmentedWrapper = getStyles(style, 'div');

export default class SegmentedControl extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.disabled !== this.props.disabled ||
      nextProps.align !== this.props.align
  }

  render() {
    return (
      <SegmentedWrapper
        disabled={this.props.disabled}
        align={this.props.align}
      >
        <div>
          {this.props.tabs.map(tab =>
            <button key={tab.name}>
              {tab.name}
            </button>
          )}
        </div>
      </SegmentedWrapper>
    );
  }
}

SegmentedControl.propTypes = {
  tabs: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center'])
};
SegmentedControl.defaultProps = { align: 'left' };

