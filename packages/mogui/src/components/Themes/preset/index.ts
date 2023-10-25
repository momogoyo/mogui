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

export const tonal = {
  primary10: '#21005D',
  primary20: '#381E72',
  primary30: '#4F378B',
  primary40: '#6750A4',
  primary50: '#7F67BE',
  primary60: '#9A82DB',
  primary70: '#B69DF8',
  primary80: '#D0BCFF',
  primary90: '#EADDFF',
  primary95: '#F6EDFF',
  primary99: '#FFFBFE',
  primary100: '#FFFFFF',
  secondary10: '#1D192B',
  secondary20: '#332D41',
  secondary30: '#4A4458',
  secondary40: '#625B71',
  secondary50: '#7A7289',
  secondary60: '#958DA5',
  secondary70: '#B0A7C0',
  secondary80: '#CCC2DC',
  secondary90: '#E8DEF8',
  secondary95: '#F6EDFF',
  secondary99: '#FFFBFE',
  secondary100: '#FFFFFF',
  tertiary10: '#31111D',
  tertiary20: '#492532',
  tertiary30: '#633B48',
  tertiary40: '#7D5260',
  tertiary50: '#986977',
  tertiary60: '#B58392',
  tertiary70: '#D29DAC',
  tertiary80: '#EFB8C8',
  tertiary90: '#FFD8E4',
  tertiary95: '#FFECF1',
  tertiary99: '#FFFBFA',
  tertiary100: '#FFFFFF',
  error10: '#410E0B',
  error20: '#601410',
  error30: '#8C1D18',
  error40: '#B3261E',
  error50: '#DC362E',
  error60: '#E46962',
  error70: '#EC928E',
  error80: '#F2B8B5',
  error90: '#F9DEDC',
  error95: '#FFECF1',
  error99: '#FFFBFA',
  error100: '#FFFFFF',
  neutral10: '#1D1B20',
  neutral20: '#48464C',
  neutral30: '#48464C',
  neutral40: '#605D64',
  neutral50: '#79767D',
  neutral60: '#938F96',
  neutral70: '#AEA9B1',
  neutral80: '#CAC5CD',
  neutral90: '#E6E0E9',
  neutral95: '#F5EFF7',
  neutral99: '#FFFBFA',
  neutral100: '#FFFFFF',
  outline: '#79747E',
  shadow: '#000000'
}