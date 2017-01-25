import * as themes from '../themes';
import defaultDarkScheme from 'redux-devtools-themes/lib/nicinabox';
import * as baseSchemes from 'base16';
import * as additionalSchemes from '../colorSchemes';
import invertColors from '../utils/invertColors';

export const schemes = { ...baseSchemes, ...additionalSchemes };
export const listSchemes = () => Object.keys(schemes).slice(1).sort(); // remove `__esModule`
export const listThemes = () => Object.keys(themes);

export const getTheme = ({ theme: type, scheme, light }) => {
  let colors;
  if (scheme === 'default') {
    colors = light ? schemes.default : defaultDarkScheme;
  } else {
    colors = schemes[scheme];
    if (light) colors = invertColors(colors);
  }

  let theme = themes.default();
  if (type !== 'default') {
    theme = { ...theme, ...themes[type](colors) };
  }

  return {
    type,
    light,
    ...colors,
    spinnerSize: Math.floor(theme.inputHeight / 2) - 2,
    inputPadding: theme.inputHeight / 3,
    selectArrowWidth: Math.floor(theme.inputHeight / 7),
    inputInternalHeight: theme.inputHeight - theme.inputBorderWidth * 2,
    inputBorderColor: colors.base02,
    inputFocusedStyle: `border-color: ${colors.base0D}`,
    ...theme
  };
};
