import type { MoguiThemesPalette } from '../Themes/index'
import type { CardType } from './types'

type CardStyles = {
  color: string
  bgColor: string
  borderColor: string
}

export const getStyles = (
  type: CardType,
  palette: MoguiThemesPalette,
  shadow?: boolean,
): CardStyles => {
  const styles: { [key in CardType]: Omit<CardStyles, 'borderColor'> } = {
    default: {
      color: palette.foreground,
      bgColor: palette.background,
    },
    secondary: {
      color: palette.background,
      bgColor: palette.secondary
    },
    success: {
      color: palette.background,
      bgColor: palette.success,
    },
    warning: {
      color: palette.background,
      bgColor: palette.warning,
    },
    error: {
      color: palette.background,
      bgColor: palette.error,
    },
  }

  return {
    ...styles[type],
    borderColor: shadow ? palette.border : 'transparent' 
  }
}