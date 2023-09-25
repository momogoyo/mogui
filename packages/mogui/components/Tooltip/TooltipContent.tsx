import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { getColors } from '../Themes/themes'
import useTheme from '../../hooks/useTheme'
import usePortal from '../../hooks/usePortal'
import useScale from '../../hooks/useScale'
import { getPosition, getRect } from './Placement'
import Transition from '../Transition'
import TooltipPlacement from './TooltipPlacement'

import type { TooltipContentProps, TooltipColor, TooltipPosition } from './types'

const TooltipContent = ({
  parentElement,
  type = 'primary',
  visible,
  placement,
  offset,
  placementOffset,
  children
}: React.PropsWithChildren<TooltipContentProps>) => {
  const [rect, setRect] = useState<TooltipPosition>(null)
  const element = usePortal('tooltip')
  const theme = useTheme()
  const { SCALES } = useScale()
  const colors: TooltipColor = getColors(type, theme.palette)
  if (!parentElement) return null

  const updateRect = () => {
    const position = getPosition(placement, getRect(parentElement), offset)
    setRect(position)
  }

  useEffect(() => {
    updateRect()
  }, [visible])

  if (!element) return null
  return createPortal(
    <Transition visible={visible}>
      <div className="tooltip-content">
        <div className="inner">
          <TooltipPlacement placement={placement} />
          {children}
        </div>
        
        {/* @ts-ignore */}
        <style jsx>{`
          .tooltip-content {
            --tooltip-placement-offset-x: ${placementOffset.x};
            --tooltip-placement-offset-y: ${placementOffset.y};
            --tooltip-content-bg: ${colors.bgColor};

            position: absolute;
            top: ${rect.top};
            left: ${rect.left};
            transform: ${rect.transform};
            color: ${colors.color};
            border-radius: ${theme.layout.radius};
            background-color: var(--tooltip-content-bg);
            width: 100px;
            height: 50px;
          }
          .inner {
            height: 100%;
          }
        `}</style>
      </div>
    </Transition>,
    element
  )
}

export default TooltipContent