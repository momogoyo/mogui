import { tuple } from '@/types/props-types'

const placement = tuple(
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd'
)
const snippetTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite'
)
const triggerTypes = tuple('hover', 'click')

export type SnippetTypes = typeof snippetTypes[number]
export type Placement = typeof placement[number]
export type TriggerTypes = typeof triggerTypes[number]
export type TooltipOnVisibleChange = (visible: boolean) => void
export type TooltipIconOffset = {
  x: string,
  y: string 
}
export interface Props {
  text?: string,
  visible?: boolean,
  initialVisible?: boolean,
  hideArrow?: boolean,
  type?: SnippetTypes,
  placement?: Placement,
  trigger?: TriggerTypes,
  enterDelay?: number,
  leaveDelay?: number,
  offset?: number,
  className?: string
  portalClassName?: string
  onVisibleChange?: TooltipOnVisibleChange
}

export interface TooptipContentProps {
  type: SnippetTypes
  visible: boolean
  offset: number
  placement: Placement
  hideArrow: boolean
  iconOffset: TooltipIconOffset,
  parent?: React.MutableRefObject<HTMLElement | null> | undefined
  className?: string
}

export const defaultProps = {
  text: '',
  visible: false,
  initialVisible: false,
  hideArrow: false,
  type: 'default' as SnippetTypes,
  placement: 'top' as Placement,
  trigger: 'hover' as TriggerTypes,
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  portalClassName: '',
  onVisibleChange: (() => {}) as TooltipOnVisibleChange
}

export type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TooltipProps = Props & NativeAttrs