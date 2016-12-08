import Color from 'color';

export const darken = (color, ratio) => new Color(color).darken(ratio).string();
export const lighten = (color, ratio) => new Color(color).lighten(ratio).string();
