import React from 'react'

import type { DynamicScalePipe, ScaleConfig } from './types'

const defaultDynamicScale: DynamicScalePipe = scale1x => {
  return `${scale1x}`
}

const defaultContext: ScaleConfig = {
  SCALES: {
    pl: defaultDynamicScale,
    pr: defaultDynamicScale,
    pb: defaultDynamicScale,
    pt: defaultDynamicScale,
    px: defaultDynamicScale,
    py: defaultDynamicScale,
    ml: defaultDynamicScale,
    mr: defaultDynamicScale,
    mb: defaultDynamicScale,
    mt: defaultDynamicScale,
    mx: defaultDynamicScale,
    my: defaultDynamicScale,
    width: defaultDynamicScale,
    height: defaultDynamicScale,
    font: defaultDynamicScale
  },
  getScaleProps: () => undefined,
  getAllScaleProps: () => ({}),
  unit: '16px'
}

export const ScaleContext = React.createContext<ScaleConfig>(defaultContext)
export const useScale = () => React.useContext<ScaleConfig>(ScaleContext)

export default useScale