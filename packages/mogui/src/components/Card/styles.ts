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
    primary: {
      color: palette.background,
      bgColor: palette.primaryContainer
    },
    secondary: {
      color: palette.background,
      bgColor: palette.secondaryContainer
    },
    tertiary: {
      color: palette.background,
      bgColor: palette.tertiaryContainer
    },
    error: {
      color: palette.background,
      bgColor: palette.errorContainer
    },
    neutral: {
      color: palette.background,
      bgColor: palette.neutralContainer
    }
  }

  return {
    ...styles[type],
    borderColor: shadow ? palette.border : 'transparent' 
  }
}