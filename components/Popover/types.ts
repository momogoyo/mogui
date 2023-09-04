import type { SnippetTypes, Placement, TooltipProps, TriggerTypes, TooltipOnVisibleChange } from '@/components/Tooltip/types'

export type PopoverTriggerTypes = TriggerTypes
export type PopoverPlacementTypes = Placement

interface Props {
  context?: React.ReactNode | (() => React.ReactNode)
  trigger?: PopoverTriggerTypes
  placement?: PopoverPlacementTypes
  disableItemsAutoClose?: boolean
}

export const defaultProps = {
  type: 'default' as SnippetTypes,
  className: '',
  initialVisible: false,
  hideArrow: false,
  placement: 'bottom' as PopoverPlacementTypes,
  trigger: 'click' as PopoverTriggerTypes,
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  portalClassName: '',
  onVisibleChange: (() => {}) as TooltipOnVisibleChange,
  disableItemAutoClose: false
}

type ExcludeTooltipProp = {
  type: SnippetTypes
  text: string
  trigger: TriggerTypes
  placement: Placement
}

interface ItemProps {
  line?: boolean
  title?: boolean
  disableAutoClose?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const defaultItemProps = {
  line: false,
  title: false,
  disableAutoClose: false,
  className: ''
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof ItemProps>

export type PopoverProps = Props & Omit<TooltipProps, keyof ExcludeTooltipProp>
export type PopoverItemProps = ItemProps & NativeAttrs