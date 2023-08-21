import React, { forwardRef } from 'react'
import { DynamicLayoutPipe, GetAllScalePropsFunction, GetScalePropsFunction, ScaleConfig, ScaleContext, ScalePropKeys, ScaleProps } from './useScale'
import { isCSSNumberValue } from '@/components/utils'

const reduceScaleCoefficient = (scale: number) => {
  if (scale === 1) return scale
  const diff = Math.abs((scale - 1) / 2)
  return scale > 1 ? 1 + diff : 1 - diff
}

const generateGetScaleProps = ({
  ...props
}): GetScalePropsFunction => {
  const getScaleProps: GetScalePropsFunction = (keyOrKeys) => {
    if (!Array.isArray(keyOrKeys)) return props[keyOrKeys as keyof ScaleProps]
    let value = undefined
    for (const key of keyOrKeys) {
      const currentValue = props[key]
      if (typeof currentValue !== 'undefined') {
        value = currentValue
      }
    }
    return value
  }
  return getScaleProps
}

const generateGetAllScaleProps = ({
  ...props
}): GetAllScalePropsFunction => {
  const getAllScaleProps: GetAllScalePropsFunction = () => {
    let scaleProps: ScaleProps = {}
    for (const key of ScalePropKeys) {
      const value = props[key as keyof ScaleProps]
      if (value !== undefined) {
        scaleProps[key as keyof ScaleProps] = value
      }
    }
    return scaleProps
  }
  return getAllScaleProps
}

export const withScale = <T, P = {}>(
  Render: React.ComponentType<P & { ref?: React.Ref<T> }>,
) => {
  // @ts-ignore
  const ScaleFC = forwardRef<T, P & ScaleProps>(({ children, ...props }, ref) => {
    const {
      pl,
      pr,
      pt,
      pb,
      px,
      py,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      padding,
      unit = '16px',
      scale = 1,
      ...innerProps
    } = props

    // function makeScaleHandler (attrValue) {
    //   return function (scale1x, defaultScale) {}
    // }
    const makeScaleHandler = 
      (attrValue: string | number | undefined): DynamicLayoutPipe => 
      (scale1x, defaultValue) => {
        if (scale1x === 0) {
          scale1x = 1
          defaultValue = defaultValue || 0
        }
        const factor = reduceScaleCoefficient(scale) * scale1x
        if (typeof attrValue === 'undefined') {
          if (typeof defaultValue !== 'undefined')  return `${defaultValue}`
          return `calc(${factor}, ${unit})`
        }

        if (!isCSSNumberValue(attrValue)) return `${attrValue}`
        const customFactor = factor * Number(attrValue)
        return `calc(${customFactor} * ${unit})`
    }

    const value: ScaleConfig = {
      getScaleProps: generateGetScaleProps(props),
      getAllScaleProps: generateGetAllScaleProps(props),
      SCALES: {
        pl: makeScaleHandler(paddingLeft ?? pl ?? px ?? padding),
        pr: makeScaleHandler(paddingRight ?? pr ?? px ?? padding),
        pt: makeScaleHandler(paddingTop ?? pt ?? py ?? padding),
        pb: makeScaleHandler(paddingBottom ?? pl ?? py ?? padding),
        px: makeScaleHandler(px ?? paddingLeft ?? paddingRight ?? pl ?? pr ?? padding),
        py: makeScaleHandler(py ?? paddingTop ?? paddingBottom ?? pt ?? pb ?? padding),
      },
      unit: '16px'
    }

    return (
      <ScaleContext.Provider value={value}>
        <Render {...(innerProps as P)} ref={ref}>
          {children}
        </Render>
      </ScaleContext.Provider>
    )
  })

  ScaleFC.displayName = `Scale${Render.displayName || 'Wrapper'}`
  return ScaleFC
}

export default withScale