import { tuple } from '@momogoyo/shared'

export interface MoguiThemesPalette {
  primary: string
  rose: string
  blue: string
  green: string
  orange: string
  yellow: string
  cement: string
  stone: string
  red: string
  violet: string
  white: string
  background: string
  foreground: string
  border: string
}

export interface MoguiThemesExpressiveness {
  shadow: string
}

export interface MoguiThemes {
  mode: string
  palette: MoguiThemesPalette
  expressiveness: MoguiThemesExpressiveness
}

const colorTypes = tuple(
  'primary',
  'rose',
  'blue',
  'green',
  'orange',
  'yellow',
  'cement',
  'stone',
  'red',
  'violet',
  'white'
)

export type ColorTypes = typeof colorTypes[number]