import type { MoguiThemes } from '../Themes/preset'

export interface ThemeProviderProps {
  themes?: Array<MoguiThemes>
  themeType?: string | 'dark' | 'light'
}

const ThemeProvider = ({
  themes = [],
  themeType
}: React.PropsWithChildren<ThemeProviderProps>) => {
  return (
    <></>
  )
}

export default ThemeProvider