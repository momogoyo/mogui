"use client"

import React from 'react'
import TooltipContent from './TooltipContent'

import type { TooltipProps } from './types'

const Tooltip = ({
  type = 'primary',
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
      
      <style jsx>{`
        .tooltip {
          width: max-content;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

Tooltip.displayName = 'MoguiTooltip'

export default Tooltip