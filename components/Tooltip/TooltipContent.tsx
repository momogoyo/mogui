import { useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useScale } from '@/hooks/useScale'
import { usePortal } from '@/hooks/usePortal'
import { useTheme } from '@/contexts/theme'
import { getColors } from '@/components/Colors'
import TooltipIcon from './TooltipIcon'

import type { TooptipContentProps } from './types'

const TooltipContent = ({
  children,
  type,
  visible,
  offset,
  placement,
  hideArrow,
  iconOffset,
  parent,
  className
}: React.PropsWithChildren<TooptipContentProps>) => {
  const theme = useTheme()
  const { SCALES } = useScale()
  const el = usePortal('tooltip')
  const selfRef = useRef<HTMLDivElement>(null)
  const colors = useMemo(() => getColors(type, theme.palette), [type, theme.palette])
  const hasShadow = type === 'default'
  const statusClassName = visible ? 'enter' : 'leave'
  const classes = `tooltip-content ${className} ${statusClassName}`

  if (!parent) return null

  const preventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.nativeEvent.stopImmediatePropagation()
  }

  if (!el) return
  return createPortal(
    <div
      ref={selfRef}
      className={classes}
      onClick={preventHandler}
    >
      <div className="inner">
        <TooltipIcon placement={placement} shadow={hasShadow} />
        {children}
      </div>

      <style jsx>{`
        .tooltip-content {
          --tooltip-icon-offset-x: ${iconOffset.x};
          --tooltip-icon-offset-y: ${iconOffset.y};
          --tooltip-content-bg: ${colors.bgColor};

          position: absolute;
          box-sizing: border-box;
          padding: 0;
          z-index: 1000;
          color: ${colors.color};
          background-color: var(--tooltip-content-bg);
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
  , el)
}

export default TooltipContent