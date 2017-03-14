import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import * as styles from './styles';
import { containerStyle } from './styles/common';

const SliderWrapper = getStyles(styles);
const ContainerWithValue = getStyles(containerStyle);

export default class Slider extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.label !== this.props.label ||
      nextProps.value !== this.props.value ||
      nextProps.max !== this.props.max ||
      nextProps.min !== this.props.min ||
      nextProps.withValue !== this.props.withValue ||
      nextProps.disabled !== this.props.disabled;
  }

  onChange = e => {
    this.props.onChange(parseFloat(e.target.value));
  };

  render() {
    const { label, sublabel, withValue, theme, ...rest } = this.props;
    const { value, max, min, disabled } = rest;
    const absMax = max - min;
    const percent = (value - min) / absMax * 100;
    const slider = <input {...rest} onChange={this.onChange} type="range" />;

    return (
      <SliderWrapper percent={percent} disabled={disabled || absMax === 0} theme={theme}>
        {label && <label>{label} {sublabel && <span>{sublabel}</span>}</label>}
        {!withValue ? slider :
          <ContainerWithValue theme={theme}>
            {slider}
            <div>{value}</div>
          </ContainerWithValue>
        }
      </SliderWrapper>
    );
  }
}

Slider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  withValue: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.object
};

Slider.defaultProps = { value: 0, min: 0, max: 100 };
