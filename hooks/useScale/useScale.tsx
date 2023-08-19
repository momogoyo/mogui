import React from 'react'

export type ScaleProps = {
  pl?: string | number
  pr?: string | number
  pt?: string | number
  pb?: string | number
}

export interface ScaleConfig {
  SCALES: ScaleProps
  getScaleProps: (key: keyof ScaleProps) => ScaleProps[keyof ScaleProps]
  getAllScaleProps: () => void
  unit: string
}

const defaultDynamicLayoutPipe = (scale1X: number) => {
  return `${scale1X}`
}

const defaultContext = {
  getScaleProps: () => undefined,
  getAllScaleProps: () => ({}),
  SCALES: {
    pl: defaultDynamicLayoutPipe,
    pr: defaultDynamicLayoutPipe,
    pb: defaultDynamicLayoutPipe,
    pt: defaultDynamicLayoutPipe
  },
  unit: '16px'
}

export const ScaleContext = React.createContext(defaultContext)
export const useScale = () => React.useContext(ScaleContext)