import { useEffect, useRef, useState, useMemo } from 'react'
import { useClasses } from '@/hooks/useClasses'
import { withScale } from '@/hooks/useScale'
import TooltipContent from './TooltipContent'
import { getRect } from './helper/rect'

import { TooltipProps, defaultProps, TooltipIconOffset } from './types'

const TooltipComponent = ({
  text,
  visible: customVisible,
  initialVisible,
  hideArrow,
  type,
  placement,
  trigger,
  enterDelay,
  leaveDelay,
  offset,
  portalClassName,
  onVisibleChange,
  children,
  ...props
}: React.PropsWithChildren<TooltipProps> & typeof defaultProps) => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const iconOffset = useMemo<TooltipIconOffset>(() => {
    if (!ref?.current) return { x: '0.75em', y: '0.75em'}
    
    const rect = getRect(ref)
    return {
      x: `${rect.width ? rect.width / 2 : 0}`,
      y: `${rect.height ? rect.height / 2 : 0}`
    }
  }, [ref?.current])
  const contentProps = {
    type,
    visible,
    offset,
    placement,
    hideArrow,
    iconOffset,
    parent: ref,
    className: portalClassName
  }

  const changeVisible = (nextState: boolean) => {
    const clear = () => {
      if (timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
    }
    const handler = (nextState: boolean) => {
      setVisible(nextState)
      clear()
    }
    clear()
    if (nextState) {
      timer.current =  setTimeout(() => handler(true), enterDelay)
      return
    }
    
    const leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay
    timer.current = setTimeout(() => handler(false), leaveDelayWithoutClick)
  }

  const onMouseHandler = (next: boolean) => trigger === 'hover' && changeVisible(next)
  const onClickHandler = () => trigger === 'click' && changeVisible(!visible)

  useEffect(() => {
    if (customVisible === undefined)
    changeVisible(visible)
  }, [customVisible])

  return (
    <div
      ref={ref}
      {...props}
      className='tooltip'
      onClick={onClickHandler}
      onMouseEnter={() => onMouseHandler(true)}
      onMouseLeave={() => onMouseHandler(false)}
    >
      {children}
      <TooltipContent {...contentProps}>{text}</TooltipContent>
      <style jsx>{`
        .tooltip {
          width: max-content;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

TooltipComponent.defaultProps = defaultProps
TooltipComponent.displayName = 'MoguiTooltip'
const Tooltip = withScale(TooltipComponent)
export default Tooltip