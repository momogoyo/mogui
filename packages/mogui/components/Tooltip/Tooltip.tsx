"use client"

import React from 'react'

import type { ModeTypes } from '../Themes'
import TooltipContent from './TooltipContent'

interface TooltipProps {
  mode?: ModeTypes
  text?: string | React.ReactNode
}

const defaultProps = {
  mode: 'default' as ModeTypes,
}

const Tooltip = ({
  mode,
  text = '',
  children
}: React.PropsWithChildren<TooltipProps> & typeof defaultProps) => {
  const contentProps = {
    mode
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

export default Tooltip