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
    primary: palette.teal,
    secondary: palette.mint,
    tertiary: palette.blue,
    success: palette.green,
    warning: palette.yellow,
    error: palette.red
  }

  const color = mode === 'primary' ? palette.foreground : palette.background

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