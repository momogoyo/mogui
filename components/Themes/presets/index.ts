export interface MoguiThemePalette {
  secondary: string
  success: string
  warning: string
  error: string
  background: string
  foreground: string
}

export interface MoguiThemes {
  type: string
  palette: MoguiThemePalette
}