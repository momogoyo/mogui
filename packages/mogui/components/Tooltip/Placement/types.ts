import { tuple } from '@momogoyo/shared'

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

export type Placement = typeof placement[number]

export interface PlacementProps {
  placement: Placement
  shadow?: string
}

export interface ParentDomRect {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface TooltipPlacementPosition {
  top: string
  left: string
  right: string
  bottom: string
  transform: string
}