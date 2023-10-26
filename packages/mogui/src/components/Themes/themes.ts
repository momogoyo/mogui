import lightMode from './preset/light'

import type { MoguiThemes, MoguiThemesPalette, ColorTypes } from './preset'

const getPresetStaticTheme = (): MoguiThemes => {
  return lightMode
}

export const getColors = (
  mode: ColorTypes,
  palette: MoguiThemesPalette
) => {
  const colors: { [key in ColorTypes]: string } = {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    error: palette.error,
    neutral: palette.neutral
  }

  const color = mode === 'neutral' ? palette.foreground : palette.background

  return {
    color,
    bgColor: colors[mode]
  }
}

const Themes = {
  getPresetStaticTheme,
  getColors
}

export default Themes