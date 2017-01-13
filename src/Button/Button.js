import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import * as styles from './styles';
import { tooltipStyle } from './styles/common';

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
    const { title, tooltipPosition, toolbar, toggle } = this.props;
    const ButtonWrapper = getStyles(styles, toggle ? 'div' : 'button', true);
    const TooltipWrapper = getStyles(tooltipStyle, 'div', false);
    const button = (
      <span>
        <ButtonWrapper
          primary={this.props.primary}
          disabled={this.props.disabled}
          mark={this.props.mark}
          onMouseUp={this.onMouseUp}
          onClick={this.props.onClick}
          type={this.props.type}
          toolbar={toolbar}
          toggle={toggle}
        >
          {this.props.children}
        </ButtonWrapper>
      </span>
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
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  toolbar: PropTypes.bool,
  toggle: PropTypes.bool,
  mark: PropTypes.bool
};

Button.defaultProps = {
  tooltipPosition: 'top'
};
