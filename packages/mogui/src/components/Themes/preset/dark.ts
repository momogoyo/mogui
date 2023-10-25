import { tonal } from './index'

import type {
  MoguiThemesPalette,
  MoguiThemes,
  MoguiThemesExpressiveness
} from './index'

export const palette: MoguiThemesPalette = {
  primary: tonal.primary80,
  onPrimary: tonal.primary20,
  primaryContainer: tonal.primary30,
  onPrimaryContainer: tonal.primary90,
  primaryFixed: tonal.primary90,
  onPrimaryFixed: tonal.primary10,
  primaryFixedDim: tonal.primary80,
  onPrimaryFixedVariant: tonal.primary30,

  secondary: tonal.secondary80,
  onSecondary: tonal.secondary20,
  secondaryContainer: tonal.secondary30,
  onSecondaryContainer: tonal.secondary90,
  secondaryFixed: tonal.secondary90,
  onSecondaryFixed: tonal.secondary10,
  secondaryFixedDim: tonal.secondary80,
  onSecondaryFixedVariant: tonal.secondary30,

  tertiary: tonal.tertiary80,
  onTertiary: tonal.tertiary20,
  tertiaryContainer: tonal.tertiary30,
  onTertiaryContainer: tonal.tertiary90,
  tertiaryFixed: tonal.tertiary90,
  onTertiaryFixed: tonal.tertiary10,
  tertiaryFixedDim: tonal.tertiary80,
  onTertiaryFixedVariant: tonal.tertiary30,

  error: tonal.error80,
  onError: tonal.error20,
  errorContainer: tonal.error30,
  onErrorContainer: tonal.error90,
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

  background: tonal.neutral10,
  foreground: tonal.primary100,
  border: tonal.outline
}

export const expressiveness: MoguiThemesExpressiveness = {
  shadowDefault: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowSmall: 'string',
  shadowMedium: 'string'
}

const themes: MoguiThemes = {
  mode: 'light',
  palette,
  expressiveness
}

export default themes