import { tuple } from '@momogoyo/shared'

export interface MoguiThemesPalette {
  red: string
  orange: string
  yellow: string
  green: string
  mint: string
  teal: string
  cyan: string
  blue: string
  indigo: string
  purple: string
  pink: string
  brown: string
  gray: string

  redDark: string
  orangeDark: string
  yellowDark: string
  greenDark: string
  mintDark: string
  tealDark: string
  cyanDark: string
  blueDark: string
  indigoDark: string
  purpleDark: string
  pinkDark: string
  brownDark: string
  grayDark: string

  default: string
  secondary: string
  success: string
  warning: string
  error: string

  defaultDark: string
  secondaryDark: string
  successDark: string
  warningDark: string
  errorDark: string
  
  border: string
  foreground: string
  background: string
}


export interface MoguiThemesExpressiveness {
  shadowDefault: string
  shadowSmall: string
  shadowMedium: string
}

export interface MoguiThemes {
  mode: string
  palette: MoguiThemesPalette
  expressiveness: MoguiThemesExpressiveness
  breakpoints?: MoguiThemesBreakpoints
  layout?: MoguiThemesLayout
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
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error'
)

export type ColorTypes = typeof colorTypes[number]

export interface MoguiTonal {
  gray_1: string
  gray_2: string
  gray_3: string
  gray_4: string
  gray_5: string
  gray_6: string

  grayDark_1: string
  grayDark_2: string
  grayDark_3: string
  grayDark_4: string
  grayDark_5: string
  grayDark_6: string
  
  black: string
  white: string
}