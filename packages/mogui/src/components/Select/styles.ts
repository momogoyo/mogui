import { tonal } from '@/components/Themes/preset'

import type { NormalTypes } from './types'
import type { MoguiThemesPalette } from '@/components/Themes'

export type SelectColor = {
  border: string
  borderActive: string
  iconBorder: string
  placeholderColor: string
}

export const getColors = (
  palette: MoguiThemesPalette,
  status?: NormalTypes,
): SelectColor => {
  const colors: { [key in NormalTypes]: SelectColor } = {
    default: {
      border: palette.border,
      borderActive: palette.foreground,
      iconBorder: palette.foreground,
      placeholderColor: tonal.gray_1,
    },
    secondary: {
      border: palette.secondary,
      borderActive: palette.secondaryDark,
      iconBorder: palette.secondaryDark,
      placeholderColor: tonal.gray_1,
    },
    success: {
      border: palette.success,
      borderActive: palette.successDark,
      iconBorder: palette.successDark,
      placeholderColor: tonal.gray_1,
    },
    warning: {
      border: palette.warning,
      borderActive: palette.warningDark,
      iconBorder: palette.warningDark,
      placeholderColor: tonal.gray_1,
    },
    error: {
      border: palette.error,
      borderActive: palette.errorDark,
      iconBorder: palette.errorDark,
      placeholderColor: palette.error,
    },
  }

  if (!status) return colors.default
  
  return colors[status]
}