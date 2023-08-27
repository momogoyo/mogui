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

      <style jsx>{`
        .tooltip-content {
          position: absolute;
          box-sizing: border-box;
          padding: 0;
          z-index: 1000;
          color: ${colors.color};
          background-color: ${colors.bgColor};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
        }

        .inner {
          position: relative;
          box-sizing: border-box;
          font-size: ${SCALES.font(1)};
          padding: ${SCALES.pt(0.65)} ${SCALES.pr(0.9)} ${SCALES.pb(0.65)} ${SCALES.pl(0.9)};
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default TooltipContent