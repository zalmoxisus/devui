import styled from 'styled-components';
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
    dark: invert,
    fontFamily: '\'Source Sans Pro\', sans-serif',
    codeFontFamily: '\'Source Code Pro\', monospace',
    inputHeight: 30,
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
    inputPadding: theme.inputHeight / 3,
    selectArrowWidth: Math.floor(theme.inputHeight / 7),
    inputInternalHeight: theme.inputHeight - theme.inputBorderWidth * 2,
    inputBorderColor: colors.base05,
    inputFocusedStyle: `border-color: ${colors.base0D}`,
    ...theme
  };
};

export const getStyles = (styles, component, multiple) => styled(component || 'div')('',
  props => (
    !multiple ? styles :
      styles[props.theme.type] || styles.default
  )(props)
);
/*
 Equivalent to
 const SelectContainer = styled(ReactSelect)`
   ${props => styles[props.theme.type](props)}
 `;
*/
