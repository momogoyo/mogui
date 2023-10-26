import { tonal } from './tonal'

import type {
  MoguiThemesPalette,
  MoguiThemes,
  MoguiThemesExpressiveness,
  MoguiThemesLayout,
  MoguiThemesBreakpoints,
} from './index'

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

  neutral: tonal.neutral99,
  onNeutral: tonal.neutral10,
  neutralContainer: tonal.neutral95,
  onNeutralContainer: tonal.neutral90,
  neutralInverse: tonal.neutral20,
  onNeutralInverse: tonal.neutral95,
  neutralFixedDim: tonal.neutral80,
  neutralFixedVariant: tonal.neutral30,

  background: tonal.primary100,
  foreground: tonal.neutral10,
  border: tonal.outline
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