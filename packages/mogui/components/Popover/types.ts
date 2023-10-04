import { tuple } from '@momogoyo/shared'

import type { TooltipProps } from '../Tooltip/types'
import type { Placement } from '../Tooltip/Placement/types'

const triggerTypes = tuple('hover', 'click')
type TriggerTypes = typeof triggerTypes[number]

interface Props {
  content?: React.ReactNode | (() => React.ReactNode)
  trigger?: TriggerTypes
  placement?: Placement
  disableItemsAutoClose?: boolean
}

type ExcludeTooltipProps = {
  type: any
  text: any
  trigger: any
  placement: any
}

export type PopoverProps = Props & Omit<TooltipProps, keyof ExcludeTooltipProps>