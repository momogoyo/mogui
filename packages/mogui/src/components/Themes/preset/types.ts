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
  // neutral
  neutral: string
  onNeutral: string
  neutralContainer: string
  onNeutralContainer: string
  neutralInverse: string
  onNeutralInverse: string
  neutralFixedDim: string
  neutralFixedVariant: string
  // etc
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
  'secondary',
  'tertiary',
  'error',
  'neutral'
)

export type ColorTypes = typeof colorTypes[number]

export interface MoguiTonal {
  primary10: string
  primary20: string
  primary30: string
  primary40: string
  primary50: string
  primary60: string
  primary70: string
  primary80: string
  primary90: string
  primary95: string
  primary99: string
  primary100: string
  secondary10: string
  secondary20: string
  secondary30: string
  secondary40: string
  secondary50: string
  secondary60: string
  secondary70: string
  secondary80: string
  secondary90: string
  secondary95: string
  secondary99: string
  secondary100: string
  tertiary10: string
  tertiary20: string
  tertiary30: string
  tertiary40: string
  tertiary50: string
  tertiary60: string
  tertiary70: string
  tertiary80: string
  tertiary90: string
  tertiary95: string
  tertiary99: string
  tertiary100: string
  error10: string
  error20: string
  error30: string
  error40: string
  error50: string
  error60: string
  error70: string
  error80: string
  error90: string
  error95: string
  error99: string
  error100: string
  neutral10: string
  neutral20: string
  neutral30: string
  neutral40: string
  neutral50: string
  neutral60: string
  neutral70: string
  neutral80: string
  neutral90: string
  neutral95: string
  neutral99: string
  neutral100: string
  outline: string
  shadow: string
}