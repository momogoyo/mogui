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


const modeTypes = tuple(
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
)

export type ModeTypes = typeof modeTypes[number]