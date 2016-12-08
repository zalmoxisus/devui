import { keyframes } from 'styled-components';
import material from './material';

import * as schemes from 'redux-devtools-themes';
import inspector from 'redux-devtools-inspector/lib/themes/inspector';
schemes.default = inspector;

export const listSchemes = () => Object.keys(schemes).slice(1);

const themes = {
  material
};

export const listThemes = () => ['default', Object.keys(themes)];

export const getTheme = ({ theme: type, scheme }) => {
  let theme = {
    inputHeight: 34,
    inputBorderWidth: 1,
    inputBorderRadius: 4
  };
  const colors = schemes[scheme];
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
    inputBorderColor: `${colors.base06} ${colors.base05} ${colors.base04}`,
    inputBorderColorFocused: colors.base0D,
    ...theme
  };
};
