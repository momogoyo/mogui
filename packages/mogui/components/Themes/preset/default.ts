import type {
  MoguiThemesPalette,
  MoguiThemes,
  MoguiThemesExpressiveness,
  MoguiThemesLayout,
  MoguiThemesBreakpoints
} from './index'

export const palette: MoguiThemesPalette = {
  primary: '#18181B',
  rose: '#E11D48',
  blue: '#2563EB',
  green: '#16A34A',
  orange: '#F97316',
  yellow: '#FACC15',
  cement: '#64748B',
  stone: '#78716C',
  red: '#DC2626',
  violet: '#7C3AED',
  white: '#FFFFFF',
  background: '#FFFFFF',
  foreground: '#09090B',
  border: '#E5E7EB'
}

export const expressiveness: MoguiThemesExpressiveness = {
  shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
}

export const defaultBreakpoints: MoguiThemesBreakpoints = {
  xs: {
    min: '0',
    max: '650px'
  },
  sm: {
    min: '650px',
    max: '900px'
  },
  md: {
    min: '900px',
    max: '1280px'
  },
  lg: {
    min: '1280px',
    max: '1920px'
  },
  xl: {
    min: '1920px',
    max: '10000px'
  }
}

export const layout: MoguiThemesLayout = {
  gap: '16pt',
  breakpointTablet: defaultBreakpoints.sm.max,
  breakpointMobile: defaultBreakpoints.xs.max,
  radius: '6px',
  unit: '16px'
}

const themes: MoguiThemes = {
  mode: 'light',
  palette,
  expressiveness,
  defaultBreakpoints,
  layout
}

export default themes