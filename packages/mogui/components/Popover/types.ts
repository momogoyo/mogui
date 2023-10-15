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

type ExcludeTypeProps = Omit<TooltipProps, keyof ExcludeTooltipProps>
export type PopoverProps = Props & ExcludeTypeProps

interface ItemProps {
  line?: boolean
  title?: boolean
  disableAutoClose?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof ItemProps>
export type PopoverItemProps = ItemProps & NativeAttrs