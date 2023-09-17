"use client"

import React from 'react'
import { createPortal } from 'react-dom'
import { getColors } from '../Themes/themes'
import useTheme from '../../hooks/useTheme'
import usePortal from '../../hooks/usePortal'
import Transition from '../Transition'

import type { TooltipContentProps, TooltipColor } from './types'

const TooltipContent = ({
  type = 'primary',
  visible,
  children
}: React.PropsWithChildren<TooltipContentProps>) => {
  const element = usePortal('tooltip')

  const theme = useTheme()
  const colors: TooltipColor = getColors(type, theme.palette)

  if (!element) return null
  return createPortal(
    <Transition visible={visible}>
      <div className="tooltip-content">
        <div className="inner">
          {children}
        </div>
        
        <style jsx>{`
          .tooltip-content {
            --tooltip-content-bg: ${colors.bgColor};

            color: ${colors.color};
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