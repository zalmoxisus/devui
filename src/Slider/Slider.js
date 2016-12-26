import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import * as styles from './styles';

const SliderWrapper = getStyles(styles, 'div', true);

export default class Slider extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.label !== this.props.label ||
      nextProps.value !== this.props.value ||
      nextProps.max !== this.props.max ||
      nextProps.min !== this.props.min ||
      nextProps.disabled !== this.props.disabled;
  }

  onChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { label, ...rest } = this.props;
    const { value, max, min, disabled } = rest;
    const absMax = max - min;
    const percent = (value - min) / absMax * 100;

    return (
      <SliderWrapper percent={percent} disabled={disabled || absMax === 0}>
        {label && <label>{label}</label>}
        <input {...rest} onChange={this.onChange} type="range" />
      </SliderWrapper>
    );
  }
}

Slider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  label: React.PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100
};
