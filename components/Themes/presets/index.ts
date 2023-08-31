export interface MoguiThemePalette {
  secondary: string
  success: string
  warning: string
  error: string
  background: string
  foreground: string
  accents_2: string
}

export interface MoguiThemes {
  type: string
  palette: MoguiThemePalette
}