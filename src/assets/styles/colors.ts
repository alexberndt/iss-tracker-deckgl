// copied from https://github.com/20treeAI/explorer/tree/master/src/assets/styles
export const getColorsWithOpacity = (opacity: string) => ({
  grey: {
    grey10: 'rgba(247, 247, 247,' + opacity + ')',
    grey20: 'rgba(241, 241, 241,' + opacity + ')',
    grey30: 'rgba(231, 231, 231,' + opacity + ')',
    grey40: 'rgba(201, 201, 201,' + opacity + ')',
    grey50: 'rgba(184, 184, 184,' + opacity + ')',
    grey60: 'rgba(144, 144, 144,' + opacity + ')',
    grey70: 'rgba(109, 109, 109,' + opacity + ')',
    grey80: 'rgba(77, 77, 77,' + opacity + ')',
    grey90: 'rgba(46, 46, 46,' + opacity + ')',
  },
  teal: {
    tealDarken10: 'rgba(12, 88, 72,' + opacity + ')',
    tealDarken05: 'rgba(13, 105, 85,' + opacity + ')',
    tealBase: 'rgba(17, 124, 101, ' + opacity + ')',
    tealLighten10: 'rgba(23, 163, 133,' + opacity + ')',
    tealLighten30: 'rgba(49, 226, 188,' + opacity + ')',
    tealLighten40: 'rgba(178, 244, 230,' + opacity + ')',
  },
  yellow: {
    yellowDarken20: 'rgba(247, 188, 51,' + opacity + ')',
    yellowBase: 'rgba(255, 207, 96,' + opacity + ')',
    yellowLighten20: 'rgba(255, 224, 151,' + opacity + ')',
  },
  orange: {
    orangeBase: 'rgba(253, 133, 46,' + opacity + ')',
  },
  red: {
    redBase: 'rgba(220, 27, 26,' + opacity + ')',
    redLighten20: 'rgba(255, 105, 105,' + opacity + ')',
  },
  blue: {
    blueBase: 'rgba(53, 148, 237,' + opacity + ')',
  },
  white: 'rgba(255, 255, 255,' + opacity + ')',
});
