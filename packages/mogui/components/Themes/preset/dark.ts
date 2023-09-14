import type { MoguiThemesPalette, MoguiThemes, MoguiThemesExpressiveness } from './index'

export const palette: MoguiThemesPalette = {
  primary: '#52525B',
  rose: '#E11D48',
  blue: '#2563EB',
  green: '#16A34A',
  orange: '#F97316',
  yellow: '#FACC15',
  cement: '#64748B',
  stone: '#78716C',
  red: '#DC2626',
  violet: '#7C3AED',
  background: '#09090B',
  foreground: '#FAFAFA',
  border: '#E5E7EB'
}

export const expressiveness: MoguiThemesExpressiveness = {
  shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
}

const themes: MoguiThemes = {
  mode: 'light',
  palette,
  expressiveness
}

export default themes