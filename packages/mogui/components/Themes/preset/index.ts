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
  defaultBreakpoints: MoguiThemesBreakpoints
  layout: MoguiThemesLayout
}

interface BreakpointsItem {
  min: string
  max: string
}

export interface MoguiThemesBreakpoints {
  xs: BreakpointsItem,
  sm: BreakpointsItem,
  md: BreakpointsItem,
  lg: BreakpointsItem,
  xl: BreakpointsItem
}

export interface MoguiThemesLayout {
  gap: string
  breakpointTablet: string
  breakpointMobile: string
  radius: string
  unit: string
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