const getTheme = (colors) => ({
  fontFamily: '\'Roboto\', sans-serif',
  codeFontFamily: '\'Roboto Mono\', monospace',
  inputBorderRadius: 0,
  inputBorderColor: `transparent transparent ${colors.base06}`,
  inputBorderColorFocused: `transparent transparent ${colors.base0D}`
});

export default getTheme;
