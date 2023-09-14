import lightMode from './preset/default'

import type { MoguiThemes } from './preset'

const getPresetStaticTheme = (): MoguiThemes => {
  return lightMode
}

const Themes = {
  getPresetStaticTheme
}

export default Themes