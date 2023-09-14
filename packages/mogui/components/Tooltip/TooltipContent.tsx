"use client"

import React from 'react'

import type { ModeTypes } from '../Themes'

interface TooltipContentProps {
  mode?: ModeTypes
}

const TooltipContent = ({
  mode,
  children
}: React.PropsWithChildren<TooltipContentProps>) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default TooltipContent