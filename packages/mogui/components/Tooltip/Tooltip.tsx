"use client"

import React from 'react'

import type { ColorTypes } from '../Themes'
import TooltipContent from './TooltipContent'

interface Props {
  type?: ColorTypes
  text?: string | React.ReactNode
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, & keyof Props>
export type TooltipProps = Props & NativeAttrs

const Tooltip = ({
  type = 'primary' as ColorTypes,
  text = '',
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {
  const contentProps = {
    type
  }

  return (
    <div className="tooltip">
      {children}
      <TooltipContent 
        {...contentProps}
      >
        {text}
      </TooltipContent>
    </div>
  )
}

Tooltip.displayName = 'MoguiTooltip'

export default Tooltip