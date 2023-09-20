"use client"

import React, { useEffect, useState, useRef } from 'react'
import TooltipContent from './TooltipContent'

import type { TooltipProps } from './types'

const Tooltip = ({
  type = 'primary',
  text = '',
  initialVisible = false,
  visible: customVisible = false,
  onVisibleChange = (() => {}),
  trigger = 'hover',
  enterDelay = 100,
  leaveDelay = 100,
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {
  const timer = useRef(null)
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const contentProps = {
    type,
    visible
  }

  const changeVisible = (state: boolean) => {
    const clear = () => {
      clearTimeout(timer.current)
      timer.current = undefined
    }

    const handler = (nextState: boolean) => {
      setVisible(nextState)
      onVisibleChange(nextState)
      clear()
    }

    if (state) {
      timer.current = setTimeout(() => handler(true), enterDelay)
      return
    }

    const leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay
    timer.current = setTimeout(() => handler(false), leaveDelayWithoutClick)
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