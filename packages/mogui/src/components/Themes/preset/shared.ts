import type {
  MoguiThemesLayout,
  MoguiThemesBreakpoints,
  MoguiThemesExpressiveness,
} from './index'

export const expressiveness: MoguiThemesExpressiveness = {
  shadowDefault: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)'
}

export const breakpoints: MoguiThemesBreakpoints = {
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
  breakpointTablet: breakpoints.sm.max,
  breakpointMobile: breakpoints.xs.max,
  radius: '6px',
  unit: '16px'
}