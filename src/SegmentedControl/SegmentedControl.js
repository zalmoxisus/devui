import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const SegmentedWrapper = getStyles(style, 'div');

export default class SegmentedControl extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.disabled !== this.props.disabled
  }

  render() {
    return (
      <SegmentedWrapper>
        {this.props.tabs.map(tab =>
          <button key={tab.name}>
            {tab.name}
          </button>
        )}
      </SegmentedWrapper>
    );
  }
}

SegmentedControl.propTypes = {
  tabs: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

