import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import * as styles from './styles';
import { tooltipStyle } from './styles/common';

const ButtonWrapper = getStyles(styles, 'button', true);
const TooltipWrapper = getStyles(tooltipStyle, 'div', false);

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.mark !== this.props.mark ||
      nextProps.big !== this.props.big ||
      nextProps.tooltipPosition !== this.props.tooltipPosition ||
      nextProps.title !== this.props.title;
  }

  onMouseUp = e => {
    e.target.blur();
  };

  render() {
    const button = (
      <ButtonWrapper
        aria-label={this.props.title}
        primary={this.props.primary}
        disabled={this.props.disabled}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
        type={this.props.type}
        big={this.props.big}
      >
        {this.props.children}
      </ButtonWrapper>
    );

    if (!this.props.title) return button;
    return (
      <TooltipWrapper
        tooltipTitle={this.props.title}
        tooltipPosition={this.props.tooltipPosition}
        mark={this.props.mark}
      >
        {button}
      </TooltipWrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right',
    'bottom-left', 'bottom-right', 'top-left', 'top-right']),
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  big: PropTypes.bool,
  mark: PropTypes.oneOf([false, 'base08', 'base09', 'base0A', 'base0B',
    'base0C', 'base0D', 'base0E', 'base0F'])
};

Button.defaultProps = {
  tooltipPosition: 'top'
};
