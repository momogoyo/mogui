import type {
  MoguiThemesPalette,
  MoguiThemes,
  MoguiThemesExpressiveness,
  MoguiThemesLayout,
  MoguiThemesBreakpoints
} from './index'

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
  neutral100: '#FFFFFF'
}

export const palette: MoguiThemesPalette = {
  primary: tonal.primary40,
  onPrimary: tonal.primary100,
  primaryContainer: tonal.primary90,
  onPrimaryContainer: tonal.primary10,
  primaryFixed: tonal.primary90,
  onPrimaryFixed: tonal.primary10,
  primaryFixedDim: tonal.primary80,
  onPrimaryFixedVariant: tonal.primary30,

  secondary: tonal.secondary40,
  onSecondary: tonal.secondary100,
  secondaryContainer: tonal.secondary90,
  onSecondaryContainer: tonal.secondary10,
  secondaryFixed: tonal.secondary90,
  onSecondaryFixed: tonal.secondary10,
  secondaryFixedDim: tonal.secondary80,
  onSecondaryFixedVariant: tonal.secondary30,

  tertiary: tonal.tertiary40,
  onTertiary: tonal.tertiary100,
  tertiaryContainer: tonal.tertiary90,
  onTertiaryContainer: tonal.tertiary10,
  tertiaryFixed: tonal.tertiary90,
  onTertiaryFixed: tonal.tertiary10,
  tertiaryFixedDim: tonal.tertiary80,
  onTertiaryFixedVariant: tonal.tertiary30,

  error: tonal.error40,
  onError: tonal.error100,
  errorContainer: tonal.error90,
  onErrorContainer: tonal.error10,
  errorFixed: tonal.error90,
  onErrorFixed: tonal.error10,
  errorFixedDim: tonal.error80,
  onErrorFixedVariant: tonal.error30,

  background: '#FFFFFF',
  foreground: '#09090B',
  border: '#E5E7EB'
}

export const expressiveness: MoguiThemesExpressiveness = {
  shadowDefault: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)'
}

export const defaultBreakpoints: MoguiThemesBreakpoints = {
  xs: {
    min: '0',
    max: '650px'
  },
  sm: {
    min: '650px',
    max: '900px'
  },
  md: {
    min: '900px',
    max: '1280px'
  },
  lg: {
    min: '1280px',
    max: '1920px'
  },
  xl: {
    min: '1920px',
    max: '10000px'
  }
}

export const layout: MoguiThemesLayout = {
  gap: '16pt',
  breakpointTablet: defaultBreakpoints.sm.max,
  breakpointMobile: defaultBreakpoints.xs.max,
  radius: '6px',
  unit: '16px'
}

const themes: MoguiThemes = {
  mode: 'light',
  palette,
  expressiveness,
  defaultBreakpoints,
  layout
}

export default themes