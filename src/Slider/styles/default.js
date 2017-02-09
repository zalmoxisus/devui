/*
Based on:
 http://codepen.io/thebabydino/pen/NPYBJQ
 http://codepen.io/thebabydino/pen/zxRzPw
 http://codepen.io/thebabydino/pen/dPqrrY
 http://codepen.io/thebabydino/pen/YPOPxr
*/

import { css } from 'styled-components';
import { prefixSelectors } from '../../utils/autoPrefix';

export const style = ({ theme, percent, disabled }) => css`
  display: block;
  width: 100%;
  position: relative;

  label {
    position: absolute;
    display: block;
    font-weight: 600;
    padding: 0 10px;
    top: 0.1em;
    width: 100%;
  }

  input {
    opacity: ${disabled ? '0.7' : '1'};
    outline: none;
    margin: 0;
    box-sizing: border-box;
    display: block;
    appearance: none;
    border-top: solid 1.5em transparent;
    border-bottom: solid 1.5em transparent;
    padding: 0.5em;
    width: 100%;
    height: 4.5em;
    border-radius: 0.75em/2.25em;
    font-size: 1em;
    cursor: pointer;
    background: linear-gradient(${theme.base01}, ${theme.base00}) padding-box,
      linear-gradient(rgba(231, 231, 231, 0) 0.84em, ${theme.base01} 2em,
      ${theme.base01} 3em, rgba(231, 231, 231, 0) 3.66em, transparent 95%)
      50% 50% border-box,
      linear-gradient(90deg, ${theme.base02} 0.025em, transparent 0.125em)
      repeat-x 0.8em 50% border-box,
      linear-gradient(90deg, ${theme.base02} 0.015em, transparent 0.125em)
      repeat-x 0.2em 50% border-box;
    background-size: 100% 100%, 100% 4.5em, 6.25em 80%, 1.25em 65%;
  }

  ${prefixSelectors('input', ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'], `{
    position: relative;
    height: 0.8em;
    border-radius: 0.5em;
    box-shadow: 0 0 .125em ${theme.base05};
    background: linear-gradient(${theme.base01}, ${theme.base02} 40%, ${theme.base01})
      no-repeat ${theme.base00};
    background-size: ${percent}% 100%;
  }`)}

 ${prefixSelectors('input', ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'], `{
    position: relative;
    appearance: none;
    box-sizing: border-box;
    cursor: ew-resize;
    width: 2em;
    height: 1.5em;
    margin-top: -0.4em;  
    border: solid 1px ${theme.base02};
    border-radius: 0.625em;
    box-shadow: 0 1px .125em ${theme.base03};
    background:
      repeating-linear-gradient(90deg, ${disabled ? theme.base00 : theme.base04},
      ${theme.base02} 0.125em, transparent 0.125em, transparent 0.28em)
      no-repeat ${theme.light ? theme.base00 : theme.base06};
    background-position: calc(50% + 1px) 50%;
    background-size: .75em .75em;
  }`)}

 ${prefixSelectors('input:focus:not(:active)',
  ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'],
  `{
    box-shadow: 0 0 1px 2px ${theme.base0D};
  }`)}

  input::-moz-focus-outer {
    border: 0;
  }
`;
