"use client"

import type { PlacementProps } from './types'

const TooltipPlacement = ({
  placement
}: PlacementProps) => {
  const bgColorWithDark = () => {

  }

  return (
    <span>
      {/* @ts-ignore */}
      <style jsx>{`
        span {
          width: 0;
          height: 0;
          position: absolute;
          border-width: 6px 7px 6px 0;
          border-style: solid;
          border-color: transparent ${bgColorWithDark} transparent transparent;
        }
      `}</style>
    </span>
  )
}

export default TooltipPlacement