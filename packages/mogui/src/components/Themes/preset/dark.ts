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
  red: '#ff6961',
  orange: '#ffb340',
  yellow: '#ffd426',
  green: '#30db5b',
  mint: '#66d4cf',
  teal: '#5de6ff',
  cyan: '#70d7ff',
  blue: '#409cff',
  indigo: '#7d7aff',
  purple: '#da8fff',
  pink: '#ff6482',
  brown: '#b59469',

  secondary: '#40c8e0',
  tertiary: '#63e6e2',
  success: '#30d158',
  warning: '#ffd60a',
  error: '#ff453a',

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