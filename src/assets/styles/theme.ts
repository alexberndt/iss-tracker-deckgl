// copied from https://github.com/20treeAI/explorer/tree/master/src/assets/styles
import { Theme } from '@emotion/react';
import { getColorsWithOpacity } from './colors';
import { typography } from './typography';

export const lightTheme: Theme = {
  mainColor: {
    foreground: {
      primary: getColorsWithOpacity('1').grey.grey90,
      secondary: getColorsWithOpacity('1').grey.grey70,
      tertiary: getColorsWithOpacity('1').grey.grey60,
      onAccent: getColorsWithOpacity('1').white,
    },
    background: {
      primary: getColorsWithOpacity('1').white,
      secondary: getColorsWithOpacity('1').grey.grey10,
      tertiary: getColorsWithOpacity('1').grey.grey30,
    },
    accent: {
      normal: getColorsWithOpacity('1').teal.tealBase,
      hover: getColorsWithOpacity('1').teal.tealLighten10,
      pressed: getColorsWithOpacity('1').teal.tealDarken10,
      secondaryHover: getColorsWithOpacity('0.1').teal.tealBase,
      secondaryPressed: getColorsWithOpacity('0.2').teal.tealBase,
    },
  },
  statusColor: {
    error: getColorsWithOpacity('1').red.redBase,
  },
  riskColor: {
    high: getColorsWithOpacity('1').red.redBase,
    medium: getColorsWithOpacity('1').orange.orangeBase,
    low: getColorsWithOpacity('1').yellow.yellowBase,
    minor: getColorsWithOpacity('1').grey.grey60,
  },
  ...typography,
};

export const darkTheme: Theme = {
  mainColor: {
    foreground: {
      primary: getColorsWithOpacity('1').white,
      secondary: getColorsWithOpacity('1').grey.grey40,
      tertiary: getColorsWithOpacity('1').grey.grey50,
      onAccent: getColorsWithOpacity('1').grey.grey90,
    },
    background: {
      primary: getColorsWithOpacity('1').grey.grey90,
      secondary: getColorsWithOpacity('1').grey.grey80,
      tertiary: getColorsWithOpacity('1').grey.grey70,
    },
    accent: {
      normal: getColorsWithOpacity('1').teal.tealLighten30,
      hover: getColorsWithOpacity('1').teal.tealLighten40,
      pressed: getColorsWithOpacity('1').teal.tealLighten10,
      secondaryHover: getColorsWithOpacity('0.1').teal.tealLighten30,
      secondaryPressed: getColorsWithOpacity('0.2').teal.tealLighten30,
    },
  },
  statusColor: {
    error: getColorsWithOpacity('1').red.redLighten20,
  },
  riskColor: {
    high: getColorsWithOpacity('1').red.redLighten20,
    medium: getColorsWithOpacity('1').orange.orangeBase,
    low: getColorsWithOpacity('1').yellow.yellowBase,
    minor: getColorsWithOpacity('1').grey.grey60,
  },
  ...typography,
};

export const brandTheme: Theme = {
  mainColor: {
    foreground: {
      primary: getColorsWithOpacity('1').white,
      secondary: getColorsWithOpacity('1').grey.grey10,
      tertiary: getColorsWithOpacity('1').grey.grey30,
      onAccent: getColorsWithOpacity('1').grey.grey90,
    },
    background: {
      primary: getColorsWithOpacity('1').teal.tealDarken05,
      secondary: getColorsWithOpacity('1').teal.tealBase,
      tertiary: getColorsWithOpacity('1').teal.tealDarken10,
    },
    accent: {
      normal: getColorsWithOpacity('1').yellow.yellowBase,
      hover: getColorsWithOpacity('1').yellow.yellowLighten20,
      pressed: getColorsWithOpacity('1').yellow.yellowDarken20,
      secondaryHover: getColorsWithOpacity('0.1').yellow.yellowBase,
      secondaryPressed: getColorsWithOpacity('0.2').yellow.yellowBase,
    },
  },
  statusColor: {
    error: getColorsWithOpacity('1').red.redBase,
  },
  riskColor: {
    high: getColorsWithOpacity('1').red.redBase,
    medium: getColorsWithOpacity('1').orange.orangeBase,
    low: getColorsWithOpacity('1').yellow.yellowBase,
    minor: getColorsWithOpacity('1').grey.grey60,
  },
  ...typography,
};

export const smallScreen = 'screen and (max-width: 1100px)';
