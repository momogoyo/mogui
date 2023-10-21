import React, { useMemo } from 'react'
import ThemeProvider from './theme-provider'
import { MoguiContent } from './mogui-context'

import type { MoguiContextParams } from './mogui-context'
import type { MoguiThemes } from '../Themes/preset'

export interface MoguiProviderProps {
  themes?: Array<MoguiThemes>
  themeType?: string | 'dark' | 'light'
}

const MoguiProvider = ({
  themes,
  themeType,
  children
}: React.PropsWithChildren<MoguiProviderProps>) => {
  const initialValue = useMemo<MoguiContextParams>(() => ({}), [])
  
  return (
    <MoguiContent.Provider value={initialValue}>
      {children}
      {/* <ThemeProvider themes={themes} themeType={themeType}>
      </ThemeProvider> */}
    </MoguiContent.Provider>
  )
}

export default MoguiProvider