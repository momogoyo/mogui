import { MoguiThemePalette } from '@/components/Themes/presets'

import type { SnippetTypes } from '@/components/Tooltip/types'
export type TooltipColors = {
  bgColor: string
  color: string
}

export const getColors = (
  type: SnippetTypes,
  palette: MoguiThemePalette
): TooltipColors => {
  const colors: {[key in SnippetTypes]: string} = {
    default: palette.background,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    secondary: palette.secondary,
    dark: palette.foreground,
    lite: palette.background
  }

  const color = type === 'lite' || type === 'default' ? palette.foreground : palette.background

  return {
    bgColor: colors[type],
    color
  }
}