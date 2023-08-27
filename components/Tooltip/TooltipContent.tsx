import { useRef } from 'react'
import { TooptipContentProps } from './types'
import { useScale } from '@/hooks/useScale'

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
  const { SCALES } = useScale()
  const selfRef = useRef<HTMLDivElement>(null)
  const statusClassName = visible ? 'enter' : 'leave'
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
          background-color: red;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          padding: 0;
          z-index: 1000;
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