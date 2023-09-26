import { forwardRef } from 'react'
import { ScaleContext } from './context'
import useTheme from '../useTheme'
import { reduceScaleCoefficient, generateGetScaleProps, generateGetAllScaleProps } from './methods'
import { isCSSNumberValue } from '@momogoyo/shared'

import type { DynamicScalePipe, ScaleConfig, ScaleProps } from './types'
type WithChildren<P> = P & { children?: React.ReactNode }

const provideScale = <T, P = {}>(
  Component: React.ComponentType<P & { ref?: React.Ref<T> }>
) => {
  const ScaleFC = forwardRef<T, WithChildren<P & ScaleProps>>(({ children, ...props }, ref) => {
    const { layout } = useTheme()
    const {
      pl, pr, pt, pb, px, py, ml, mr, mt, mb, mx, my,  
      paddingLeft, paddingRight, paddingTop, paddingBottom, marginTop, marginRight, marginBottom, marginLeft,
      margin, padding,
      width, height, w, h,
      font, unit = layout.unit, scale = 1,
      ...innerProps
    } = props

    const makeScaleHandler = (attrValue?: string | number | undefined): DynamicScalePipe => {
      return (scale1x, defaultValue) => {
        if (scale1x === 0) {
          scale1x = 1
          defaultValue = defaultValue || 0
        }

        const factor = reduceScaleCoefficient(scale) * scale1x
        if (typeof attrValue === 'undefined') {
          if (typeof defaultValue !== 'undefined') return `${attrValue}`
          return `calc(${factor} * ${unit})`
        }

        if (!isCSSNumberValue(attrValue)) return `${attrValue}`
        const customFactor = factor * Number(attrValue)
        return `calc(${customFactor} * ${customFactor})`
      }
    }

    const value: ScaleConfig = {
      unit: unit,
      SCALES: {
        pt: makeScaleHandler(paddingTop ?? pt ?? py ?? padding),
        pr: makeScaleHandler(paddingRight ?? pr ?? px ?? padding),
        pb: makeScaleHandler(paddingBottom ?? pb ?? py ?? padding),
        pl: makeScaleHandler(paddingLeft ?? pl ?? px ?? padding),
        px: makeScaleHandler(px ?? paddingLeft ?? paddingRight ?? pl ?? pr ?? padding),
        py: makeScaleHandler(py ?? paddingTop ?? paddingBottom ?? pt ?? pb ?? padding),
        mt: makeScaleHandler(marginTop ?? mt ?? my ?? margin),
        mr: makeScaleHandler(marginRight ?? mr ?? mx ?? margin),
        mb: makeScaleHandler(marginBottom ?? mb ?? my ?? margin),
        ml: makeScaleHandler(marginLeft ?? ml ?? mx ?? margin),
        mx: makeScaleHandler(mx ?? marginLeft ?? marginRight ?? ml ?? mr ?? margin),
        my: makeScaleHandler(my ?? marginTop ?? marginBottom ?? mt ?? mb ?? margin),
        width: makeScaleHandler(width ?? w),
        height: makeScaleHandler(height ?? h),
        font: makeScaleHandler(font),
      },
      getScaleProps: generateGetScaleProps(props),
      getAllScaleProps: generateGetAllScaleProps(props),
    }
  
    return (
      <ScaleContext.Provider value={value}>
        <Component {...(innerProps as P)} ref={ref}>
          {children}
        </Component>
      </ScaleContext.Provider>
    )
  })

  ScaleFC.displayName = `Scale${Component.displayName || 'Wrapper'}`
  return ScaleFC
}

export default provideScale