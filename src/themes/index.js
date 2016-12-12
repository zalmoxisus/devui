import { keyframes } from 'styled-components';
import invertColors from '../utils/invertColors';

import material from './material';

import * as schemes from 'redux-devtools-themes';
import defaultScheme from 'base16';
schemes.default = defaultScheme;

export const listSchemes = () => Object.keys(schemes).slice(1);

const themes = {
  material
};

export const listThemes = () => ['default', Object.keys(themes)];

export const getTheme = ({ theme: type, scheme, invert }) => {
  let theme = {
    type,
    fontFamily: '\'Source Code Pro\', monospace',
    inputHeight: 34,
    inputBorderWidth: 1,
    inputBorderRadius: 4
  };
  let colors = schemes[scheme];
  if (invert) colors = invertColors(colors);
  if (type !== 'default') {
    theme = {
      ...theme,
      ...themes[type](colors)
    };
  }
  return {
    ...colors,
    spinnerSize: Math.floor(theme.inputHeight / 2) - 2,
    inputPaddingVertical: theme.inputHeight / 3,
    inputPaddingHorizontal: theme.inputHeight / 3,
    selectArrowWidth: Math.floor(theme.inputHeight / 7),
    inputInternalHeight: theme.inputHeight - theme.inputBorderWidth * 2,
    inputBorderColor: colors.base06,
    inputBorderColorFocused: colors.base0D,
    ...theme
  };
};

export const spin = keyframes`
  to { transform: rotate(1turn); }
`;
export const spinner = (theme) => `
  animation: ${spin} 400ms infinite linear;
  width: ${theme.spinnerSize}px;
  height: ${theme.spinnerSize}px;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${Math.floor(theme.spinnerSize / 8)}px solid ${theme.base05};
  border-right-color: ${theme.base01};
  display: inline-block;
  position: relative;
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
