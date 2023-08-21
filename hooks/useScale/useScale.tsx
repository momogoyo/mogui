import React from 'react'

export const ScalePropKeys = [
  'pl',
  'pr',
  'pt',
  'pb',
  'px',
  'py',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom'
]

export type ScaleProps = {
  pl?: string | number
  pr?: string | number
  pt?: string | number
  pb?: string | number
  px?: string | number
  py?: string | number
  padding?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingBottom?: string | number
  unit?: string
  scale?: number
}

export type ScaleInputKeys = 
  | 'pl'
  | 'pr'
  | 'pt'
  | 'pb'
  | 'px'
  | 'py'

export type DynamicLayoutPipe = (
  scale1x: number,
  defaultValue?: string | number
) => string

export type DynamicScales = {
  [key in ScaleInputKeys]: DynamicLayoutPipe
}

export type GetScalePropsFunction = (
  key: keyof ScaleProps | Array<keyof ScaleProps>
) => ScaleProps[keyof ScaleProps]

export type GetAllScalePropsFunction = () => ScaleProps

export interface ScaleConfig {
  SCALES: DynamicScales // { pl: (scale1x: number, defaultValue?: string | number) => string ... }
  getScaleProps: GetScalePropsFunction
  getAllScaleProps: GetAllScalePropsFunction
  unit: string
}

const defaultDynamicLayoutPipe = (scale1X: number) => {
  return `${scale1X}` // 문자열로 반환
}

const defaultContext: ScaleConfig = {
  getScaleProps: () => undefined, // '10px'
  getAllScaleProps: () => ({}), // { pl: '10px', pr: '20px' ... }
  SCALES: {
    pl: defaultDynamicLayoutPipe, // pl: (scaleX: number) => `${scaleX}`
    pr: defaultDynamicLayoutPipe,
    pb: defaultDynamicLayoutPipe,
    pt: defaultDynamicLayoutPipe,
    px: defaultDynamicLayoutPipe,
    py: defaultDynamicLayoutPipe
  },
  unit: '16px'
}

export const ScaleContext = React.createContext<ScaleConfig>(defaultContext)
export const useScale = (): ScaleConfig => React.useContext<ScaleConfig>(ScaleContext)