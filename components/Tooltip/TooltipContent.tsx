import { useMemo, useRef } from 'react'
import { useScale } from '@/hooks/useScale'
import { getColors } from '@/components/Colors'

import type { TooptipContentProps } from './types'
import { useTheme } from '@/hooks/useTheme'

const TooltipContent = ({
  children,
  parent,
  visible,
  offset,
  placement,
  type,
  className,
  hideArrow,
}: React.PropsWithChildren<TooptipContentProps>) => {
  const theme = useTheme()
  const { SCALES } = useScale()
  const selfRef = useRef<HTMLDivElement>(null)
  const statusClassName = visible ? 'enter' : 'leave'
  const colors = useMemo(() => getColors(type, theme.palette), [type, theme.palette])
  const classes = `tooltip-content ${className} ${statusClassName}`

  const preventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.nativeEvent.stopImmediatePropagation()
  }

  return (
    <div
      ref={selfRef}
      className={classes}
      onClick={preventHandler}
    >
      <div className="inner">
        {children}
      </div>

      <style>{`
        .tooltip-content {
          display: none;
          position: absolute;
          background-color: ${colors.bgColor};
          color: ${colors.color};
          padding: 0;
          z-index: 10s00;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
        }
        .tooltip-content.enter {
          display: block;
        }

        .inner {
          position: relative;
          box-sizing: border-box;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default TooltipContent