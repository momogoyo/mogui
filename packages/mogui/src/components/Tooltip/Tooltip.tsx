import React, { useEffect, useState, useRef, useMemo } from 'react'
import { getRect } from './Placement'
import TooltipContent from './TooltipContent'
import { provideScale } from '../../hooks/useScale'
import useClickAway from '../../hooks/useClickAway'
import useClasses from '../../hooks/useClasses'

import type { TooltipProps, TooltipIconOffset } from './types'

const TooltipComponent = ({
  type = 'primary',
  text = '',
  initialVisible = false,
  visible: customVisible = false,
  onVisibleChange = (() => {}),
  trigger = 'hover',
  enterDelay = 100,
  leaveDelay = 100,
  placement = 'top',
  offset = 12,
  className = '',
  portalClassName = '',
  hideArrow = false,
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {
  const ref = useRef<HTMLDivElement>(null)
  const timer = useRef<number>(null)
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const classes = useClasses('tooltip', className)
  const placementOffset = useMemo<TooltipIconOffset>(() => {
    if (!ref?.current) return { x: '0.75em', y: '0.75em' }
    
    const rect = getRect(ref)
    return {
      x: `${rect.width ? rect.width / 2 : 0}px`,
      y: `${rect.height ? rect.height / 2 : 0}px`
    }
  }, [ref?.current])
  
  const contentProps = {
    parentElement: ref,
    type,
    visible,
    placement,
    offset,
    placementOffset,
    className: portalClassName,
    hideArrow,
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
    
    clear()
    if (state) {
      timer.current = window.setTimeout(() => handler(true), enterDelay)
      return
    }

    const leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay
    timer.current = window.setTimeout(() => handler(false), leaveDelayWithoutClick)
  }

  const mouseEventHandler = (state: boolean) => trigger === 'hover' && changeVisible(state)
  const clickEventHandler = () => trigger === 'click' && changeVisible(!visible)

  useClickAway(ref, () => trigger === 'click' && changeVisible(false))
  useEffect(() => {
    if (customVisible === undefined) return

    changeVisible(customVisible)
  }, [customVisible])

  return (
    <div
      ref={ref}
      className={classes}
      onClick={clickEventHandler}
      onMouseEnter={() => mouseEventHandler(true)}
      onMouseLeave={() => mouseEventHandler(false)}
      {...props}>
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

TooltipComponent.displayName = 'MoguiTooltip'
const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = provideScale(TooltipComponent)

export default Tooltip