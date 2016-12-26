import { css } from 'styled-components';
import { prefixSelectors } from '../../utils/autoPrefix';
import color from '../../utils/color';
import { animationCurve } from '../../utils/animations';

export const style = ({ theme, percent, disabled }) => css`
  display: block;
  width: 100%;

  label {
    font-weight: 600;
    padding: 5px;
  }

  input {
    opacity: ${disabled ? '0.7' : '1'};
    outline: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 0;
    margin-top: 8px;
    cursor: pointer;
    color: inherit;
    background-color: ${theme.base05};
    background-image:
      linear-gradient(90deg, currentcolor, currentcolor ${percent}%, transparent ${percent}%);
    background-clip: content-box;
    height: 6px;
    border-radius: 999px;
    appearance: none;
  }

 ${prefixSelectors('input', ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'], `{
    width: 17px;
    height: 17px;
    background-image: none;
    background-color: ${percent === 0 ? theme.base07 : 'currentcolor'};
    border: ${percent === 0 ? `5px solid ${theme.base04}` : 'none'};;
    border-radius: 50%;
    appearance: none;
    transition: transform 0.18s ${animationCurve},
      border 0.18s ${animationCurve},
      box-shadow 0.18s ${animationCurve},
      background 0.28s ${animationCurve};
  }`)}

 ${prefixSelectors('input:focus:not(:active)',
  ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'],
  `{
    box-shadow: 0 0 0 8px ${color(theme.base0D, 'alpha', 0.5)};
    transform: scale(1.2);
  }`)}

  input::-moz-focus-outer {
    border: 0;
  }
`;
