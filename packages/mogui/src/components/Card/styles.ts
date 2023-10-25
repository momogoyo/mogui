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
      bgColor: palette.primary10
    },
    rose: {
      color: palette.background,
      bgColor: palette.rose
    },
    blue: {
      color: palette.background,
      bgColor: palette.blue
    },
    green: {
      color: palette.background,
      bgColor: palette.green
    },
    orange: {
      color: palette.background,
      bgColor: palette.orange
    },
    yellow: {
      color: palette.background,
      bgColor: palette.yellow
    },
    cement: {
      color: palette.background,
      bgColor: palette.cement
    },
    stone: {
      color: palette.background,
      bgColor: palette.stone
    },
    red: {
      color: palette.background,
      bgColor: palette.red
    },
    violet: {
      color: palette.background,
      bgColor: palette.violet
    },
    white: {
      color: palette.foreground,
      bgColor: palette.white
    }
  }

  return {
    ...styles[type],
    borderColor: shadow ? palette.border : 'transparent' 
  }
}