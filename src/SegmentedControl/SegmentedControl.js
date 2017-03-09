import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const SegmentedWrapper = getStyles(style, 'div');

export default class SegmentedControl extends Component {
  constructor(props) {
    super(props);
    this.updateTabs(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs || nextProps.selected !== this.props.selected) {
      this.updateTabs(nextProps);
    }
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.disabled !== this.props.disabled ||
      nextProps.align !== this.props.align ||
      nextProps.selected !== this.props.selected
  }

  onClick = e => {
    this.props.onClick(e.target.value);
  };

  updateTabs(props) {
    const tabs = props.tabs;
    const selected = props.selected;

    this.tabs = tabs.map(tab => {
      let isSelected;
      const value = typeof tab.value !== 'undefined' ? tab.value : tab.name;
      if (value === selected) {
        isSelected = true;
        this.selected = tab.name;
      }
      return (
        <button
          key={value}
          value={value}
          data-selected={isSelected}
          onClick={this.onClick}
        >
          {tab.name}
        </button>
      );
    });
  }

  render() {
    return (
      <SegmentedWrapper
        disabled={this.props.disabled}
        align={this.props.align}
      >
        <span>{this.selected}</span>
        <div>
          {this.tabs}
        </div>
      </SegmentedWrapper>
    );
  }
}

SegmentedControl.propTypes = {
  tabs: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right'])
};
SegmentedControl.defaultProps = { align: 'right' };

