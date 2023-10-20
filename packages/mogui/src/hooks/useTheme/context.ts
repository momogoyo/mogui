import React from 'react'
import Theme from '../../components/Themes'
import { MoguiThemes } from '../../components/Themes'

const defaultTheme = Theme.getPresetStaticTheme()

export const ThemeContext: React.Context<MoguiThemes> = React.createContext<MoguiThemes>(defaultTheme)
export const useTheme = (): MoguiThemes => React.useContext<MoguiThemes>(ThemeContext)

export default useTheme