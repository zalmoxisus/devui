import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import * as styles from './styles';
import { tooltipStyle } from './styles/common';

const ButtonWrapper = getStyles(styles, 'button', true);
const TooltipWrapper = getStyles(tooltipStyle, 'div', false);

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.mark !== this.props.mark ||
      nextProps.tooltipPosition !== this.props.tooltipPosition ||
      nextProps.title !== this.props.title;
  }

  onMouseUp = e => {
    e.target.blur();
  };

  render() {
    const { title, tooltipPosition, toolbar, mark } = this.props;
    const button = (
      <ButtonWrapper
        primary={this.props.primary}
        disabled={this.props.disabled}
        mark={mark}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
        type={this.props.type}
        toolbar={toolbar}
      >
        {this.props.children}
      </ButtonWrapper>
    );

    if (!title) return button;
    return (
      <TooltipWrapper
        tooltipTitle={title}
        tooltipPosition={tooltipPosition}
        toolbar={toolbar}
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
  toolbar: PropTypes.bool,
  mark: PropTypes.oneOf(['01', '02', '03', '04', '05', '06',
    '07', '08', '09', '0A', '0B', '0C', '0D', '0E', '0F'])
};

Button.defaultProps = {
  tooltipPosition: 'top'
};
