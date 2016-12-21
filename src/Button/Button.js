import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import * as styles from './styles';

const ButtonWrapper = getStyles(styles, 'button', true);

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.disabled !== this.props.disabled;
  }

  onMouseUp = e => {
    e.target.blur();
  };

  render() {
    return (
      <ButtonWrapper
        disabled={this.props.disabled}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.children}
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
