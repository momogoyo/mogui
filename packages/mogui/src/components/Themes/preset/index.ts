import { tuple } from '@momogoyo/shared'

export interface MoguiThemesPalette {
  // primary
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  primaryFixed: string
  onPrimaryFixed: string
  primaryFixedDim: string
  onPrimaryFixedVariant: string
  // secondary
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  secondaryFixed: string
  onSecondaryFixed: string
  secondaryFixedDim: string
  onSecondaryFixedVariant: string
  // tertiary
  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  tertiaryFixed: string
  onTertiaryFixed: string
  tertiaryFixedDim: string
  onTertiaryFixedVariant: string
  // error
  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string
  errorFixed: string
  onErrorFixed: string
  errorFixedDim: string
  onErrorFixedVariant: string
  background: string
  foreground: string
  border: string
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
  defaultBreakpoints?: MoguiThemesBreakpoints
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