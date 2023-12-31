import { useMemo } from 'react'
import { getPlacementPosition } from './Placement'

import type { PlacementProps } from './Placement/types'

const TooltipPlacement = ({
  placement
}: PlacementProps) => {
  const { top, left, right, bottom, transform } = useMemo(() => 
    getPlacementPosition(
      placement,
      'var(--tooltip-placement-offset-x)',
      'var(--tooltip-placement-offset-y)'
    ),
  [placement])
  
  return (
    <span>
      <style jsx>{`
        span {
          position: absolute;
          top: ${top};
          left: ${left};
          right: ${right};
          bottom: ${bottom};
          transform: ${transform};
          border-width: 6px 7px 6px 0;
          border-style: solid;
          border-color: transparent var(--tooltip-content-bg) transparent transparent;
          width: 0;
          height: 0;
        }
      `}</style>
    </span>
  )
}

export default TooltipPlacement