import React from 'react'
import Themes from '@/components/Themes'

import type { MoguiThemes } from '@/components/Themes/presets'

const defaultTheme = Themes.getPresetStaticTheme()

export const ThemeContext: React.Context<MoguiThemes> = React.createContext<MoguiThemes>(defaultTheme)
export const useTheme = (): MoguiThemes => React.useContext<MoguiThemes>(ThemeContext)