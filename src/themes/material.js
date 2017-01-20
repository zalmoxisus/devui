const getTheme = colors => ({
  fontFamily: "'Roboto', sans-serif",
  codeFontFamily: "'Roboto Mono', monospace",
  inputPadding: 0,
  inputBorderRadius: 0,
  inputBorderColor: `transparent transparent ${colors.base02}`,
  inputFocusedStyle: `box-shadow: inset 0 -2px 0 ${colors.base0D};`
});

export default getTheme;
