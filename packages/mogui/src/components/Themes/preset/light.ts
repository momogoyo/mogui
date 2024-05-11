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
  red: '#ff453a',  
  orange: '#ff9f0a',
  yellow: '#ffd60a',
  green: '#30d158',
  mint: '#63e6e2',
  teal: '#40c8e0',
  cyan: '#64d2ff',
  blue: '#0a84ff',
  indigo: '#5e5ce6',
  purple: '#bf5af2',
  pink: '#ff375f',
  brown: '#ac8e68',

  secondary: '#008299',
  tertiary: '#0c817b',
  success: '#248a3d',
  warning: '#b25000',
  error: '#d70015',

  border: tonal.gray,
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