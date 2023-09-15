import lightMode from './preset/default'

import type { MoguiThemes, MoguiThemesPalette, ModeTypes } from './preset'

const getPresetStaticTheme = (): MoguiThemes => {
  return lightMode
}

const getColors = (
  mode: ModeTypes,
  palette: MoguiThemesPalette
) => {
  const colors: { [key in ModeTypes]: string } = {
    primary: palette.primary,
    rose: palette.rose,
    blue: palette.blue,
    green: palette.green,
    orange: palette.orange,
    yellow: palette.yellow,
    cement: palette.cement,
    stone: palette.stone,
    red: palette.red,
    violet: palette.violet
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