"use client"

import React, { useEffect, useState } from 'react'
import TooltipContent from './TooltipContent'

import type { TooltipProps } from './types'

const Tooltip = ({
  type = 'primary',
  text = '',
  initialVisible = false,
  visible: customVisible = false,
  onVisibleChange = (() => {}),
  trigger = 'hover',
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const contentProps = {
    type,
    visible
  }

  const changeVisible = (state: boolean) => {
    setVisible(state)
    onVisibleChange(state)
  }

  const mouseEventHandler = (state: boolean) => trigger === 'hover' && changeVisible(!state)
  const clickEventHandler = () => trigger === 'click' && changeVisible(!visible)

  useEffect(() => {
    if (customVisible === undefined) return

    changeVisible(customVisible)
  }, [customVisible])

  return (
    <div className="tooltip"
      onMouseEnter={() => mouseEventHandler(true)}
      onMouseLeave={() => mouseEventHandler(false)}
      onClick={clickEventHandler}
    >
      {children}
      <TooltipContent 
        {...contentProps}
      >
        {text}
      </TooltipContent>
      
      {/* @ts-ignore */}
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