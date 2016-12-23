import { css } from 'styled-components';

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

  input::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    background-color: currentcolor;
    border: 0;
    border-radius: 999px;
    -webkit-appearance: none;
  }

  input::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: currentcolor;
    border: 0;
    border-radius: 999px;
  }

  input::-ms-thumb {
    width: 24px;
    height: 24px;
    background-color: currentcolor;
    border: 0;
    border-radius: 999px;
  }

  input:focus:not(:active)::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px ${theme.base0D};
  }

  input:focus:not(:active)::-moz-range-thumb {
    box-shadow: 0 0 0 3px ${theme.base0D};
  }

  input:focus:not(:active)::-ms-thumb {
    box-shadow: 0 0 0 3px ${theme.base0D};
  }

  input::-moz-focus-outer {
    border: 0;
  }
`;
