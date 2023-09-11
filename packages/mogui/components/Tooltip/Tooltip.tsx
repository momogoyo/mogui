"use client"

import React from 'react'

interface TooltipProps {
  text?: string
  children?: React.ReactNode
}

const Tooltip = ({
  text = '',
  children
}: React.PropsWithChildren<TooltipProps>) => {
  return (
    <div className="tooltip">
      {children}
      {text}
    </div>
  )
}

export default Tooltip