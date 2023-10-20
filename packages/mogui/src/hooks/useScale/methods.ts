import {
  ScaleProps,
  ScalePropKeys,
  GetScalePropsFunction,
  GetAllScalePropsFunction
} from './types'

export const reduceScaleCoefficient = (scale: number) => {
  if (scale === 1) return scale
  const diff = Math.abs((scale - 1) / 2)
 
  return scale > 1 ? 1 + diff : 1 - diff
}

export const generateGetScaleProps = <P>(
  props: P & ScaleProps
): GetScalePropsFunction => {
  const getScaleProps: GetScalePropsFunction = keyOrKeys => {
    if (!Array.isArray(keyOrKeys)) return props[keyOrKeys as keyof ScaleProps]
    let value = undefined
    for (const key of keyOrKeys) {
      const currentValue = props[key as keyof P & keyof ScaleProps]
      if (typeof currentValue !== 'undefined') {
        value = currentValue
      }
    }
    return value
  }
  return getScaleProps
}

export const generateGetAllScaleProps = <P>(
  props: P & ScaleProps,
): GetAllScalePropsFunction => {
  const getAllScaleProps: GetAllScalePropsFunction = () => {
    let scaleProps: ScaleProps = {}
    for (const key of ScalePropKeys) {
      const value = props[key as keyof ScaleProps]
      if (typeof value !== 'undefined') {
        scaleProps[key as keyof ScaleProps] = value as any
      }
    }
    return scaleProps
  }
  return getAllScaleProps
}