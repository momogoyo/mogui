import { useMemo } from 'react'
import { getPlacementPosition } from './Placement'

import type { PlacementProps } from './Placement/types'

const TooltipPlacement = ({
  placement
}: PlacementProps) => {
  const { top, left, right, bottom, transform } = useMemo(() => 
    getPlacementPosition(
      placement,
      'var(--tooltip-icon-offset-x)',
      'var(--tooltip-icon-offset-y)'
    ),
  [placement])
  
  return (
    <span>
      {/* @ts-ignore */}
      <style jsx>{`
        span {
          width: 0;
          height: 0;
          position: absolute;
          top: ${top};
          left: ${left};
          right: ${right};
          bottom: ${bottom};
          transform: ${transform};
          border-width: 6px 7px 6px 0;
          border-style: solid;
          border-color: transparent var(--tooltip-content-bg) transparent transparent;
        }
      `}</style>
    </span>
  )
}

export default TooltipPlacement