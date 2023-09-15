"use client"

import React from 'react'
import { getColors } from '../Themes/themes'
import useTheme from '../../hooks/useTheme'

import type { ColorTypes } from '../Themes'

interface TooltipContentProps {
  type?: ColorTypes
}

interface TooltipColor {
  bgColor: string
  color: string
}

const TooltipContent = ({
  type = 'primary',
  children
}: React.PropsWithChildren<TooltipContentProps>) => {
  const theme = useTheme()
  const colors: TooltipColor = getColors(type, theme.palette)

  return (
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
  )
}

export default TooltipContent