import { tonal } from './tonal'

import {
  expressiveness,
  breakpoints,
  layout
} from './shared'

import type {
  MoguiThemesPalette,
  MoguiThemes
} from './index'

export const palette: MoguiThemesPalette = {
  red: '#ff3b2f',
  orange: '#ff9500',
  yellow: '#ffcc02',
  green: '#27cd41',
  mint: '#03c7be',
  teal: '#59adc4',
  cyan: '#54bef0',
  blue: '#007aff',
  indigo: '#5856d7',
  purple: '#af52de',
  pink: '#ff375f',
  brown: '#a2845e',
  gray: '#8e8e93',

  redDark: '#ff453a',
  orangeDark: '#ff9f0a',
  yellowDark: '#ffd60a',
  greenDark: '#30d158',
  mintDark: '#63e6e2',
  tealDark: '#40c8e0',
  cyanDark: '#64d2ff',
  blueDark: '#0a84ff',
  indigoDark: '#5e5ce6',
  purpleDark: '#bf5af2',
  pinkDark: '#ff375f',
  brownDark: '#ac8e68',
  grayDark: '#98989d',

  default: tonal.white,
  secondary: '#8e8e93',
  success: '#007aff',
  warning: '#ffcc02',
  error: '#ff3b2f',

  defaultDark: tonal.black,
  secondaryDark: '#98989d',
  successDark: '#0a84ff',
  warningDark: '#ffd60a',
  errorDark: '#ff453a',

  border: tonal.gray_1,
  foreground: tonal.black,
  background: tonal.white
}

const themes: MoguiThemes = {
  mode: 'light',
  palette,
  expressiveness,
  breakpoints,
  layout
}

export default themes