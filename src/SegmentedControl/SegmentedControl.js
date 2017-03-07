import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const ButtonWrapper = getStyles(style, 'div');

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.updateItems(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs || nextProps.selected !== this.props.selected) {
      this.updateItems(nextProps);
    }
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.title !== this.props.title;
  }

  updateItems(props) {
    const tabs = props.tabs;

    this.tabsHeader = tabs.map(tab => {
      const value = typeof tab.value !== 'undefined' ? tab.value : tab.name;
      return (
        <ButtonWrapper
          key={value}
          value={value}
          onClick={this.onClick}
        >
          {tab.name}
        </ButtonWrapper>
      );
    });
  }

  render() {
    return (
      <div>
        {this.tabsHeader}
      </div>
    );
  }
}

Button.propTypes = {
  tabs: PropTypes.array.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  tooltipPosition: 'top'
};
