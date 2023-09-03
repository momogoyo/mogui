import { useMemo } from 'react'
import { useTheme } from '@/contexts/theme'
import { getIconPosition } from './helper/placement'

import type { Placement } from './types'

interface TooltipIconProps {
  placement: Placement
  shadow: boolean
}

const TooltipIcon = ({
  placement,
  shadow
}: TooltipIconProps) => {
  const theme = useTheme()
  const { top, bottom, left, right, transform } = useMemo(() => getIconPosition(placement, '', ''), [placement])

  const bgColorWithDark = useMemo(() => {
    if (!shadow || theme.type === 'dark') {
      return 'var(--tooltip-content-bg)'
    }
    return theme.palette.accents_2
  }, [theme.type, shadow])

  return (
    <span>
      <style jsx>{`
        span {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 7px 6px 0;
          border-color: transparent ${bgColorWithDark} transparent transparent;
          position: absolute;
          top: ${top};
          bottom: ${bottom};
          left: ${left};
          right: ${right};
          transform: ${transform};
        }
      `}</style>
    </span>
  )
}

export default TooltipIcon