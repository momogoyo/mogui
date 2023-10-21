import React from 'react'

export interface MoguiContextParams {}
const defaultParams: MoguiContextParams = {}

export const MoguiContent: React.Context<MoguiContextParams> = React.createContext<MoguiContextParams>(defaultParams)
export const useMoguiContext = (): MoguiContextParams => React.useContext<MoguiContextParams>(MoguiContent)