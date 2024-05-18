import { tonal } from './tonal'

import {
  expressiveness,
  breakpoints,
  layout
} from './shared'

import type {
  MoguiThemesPalette,
  MoguiThemes,
} from './index'

export const palette: MoguiThemesPalette = {
  red: '#ff6861',
  orange: '#ffb33f',
  yellow: '#ffd426',
  green: '#32de4b',
  mint: '#66d5cf',
  teal: '#5de6ff',
  cyan: '#70d7ff',
  blue: '#419cff',
  indigo: '#7e7aff',
  purple: '#da8fff',
  pink: '#ff6482',
  brown: '#b29267',
  gray: '#b29267',
  
  redDark: '#d70015',
  orangeDark: '#c93400',
  yellowDark: '#a15901',
  greenDark: '#027d1c',
  mintDark: '#0d817c',
  tealDark: '#008299',
  cyanDark: '#0171a4',
  blueDark: '#0040dd',
  indigoDark: '#3634a3',
  purpleDark: '#ac44ab',
  pinkDark: '#d20f44',
  brownDark: '#7f6545',
  grayDark: '#646469',

  default: tonal.black,
  secondary: '#646469',
  success: '#248a3d',
  warning: '#a15901',
  error: '#d70015',

  defaultDark: tonal.white,
  secondaryDark: '#b29267',
  successDark: '#419cff',
  warningDark: '#ffd426',
  errorDark: '#ff6861',

  border: tonal.gray_6,
  foreground: tonal.white,
  background: tonal.black
}

const themes: MoguiThemes = {
  mode: 'dark',
  palette,
  expressiveness,
  breakpoints,
  layout
}

export default themes