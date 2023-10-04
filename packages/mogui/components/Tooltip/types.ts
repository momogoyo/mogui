import React from 'react'
import { tuple } from '@momogoyo/shared'

import type { ColorTypes } from '../Themes'
import type { Placement } from './Placement/types'

const triggerTypes = tuple('hover', 'click')
type TriggerTypes = typeof triggerTypes[number]

interface Props {
  type?: ColorTypes
  text?: string | React.ReactNode
  initialVisible?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  trigger?: TriggerTypes
  enterDelay?: number
  leaveDelay?: number
  placement?: Placement
  offset?: number
  className?: string
  portalClassName?: string
  hideArrow?: boolean
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, & keyof Props>
export type TooltipProps = Props & NativeAttrs

export type TooltipIconOffset = {
  x: string
  y: string
}

export interface TooltipContentProps {
  parentElement?: React.MutableRefObject<HTMLElement | null> | undefined
  type?: ColorTypes
  visible?: boolean
  placement?: Placement
  offset?: number
  placementOffset?: TooltipIconOffset
  className?: string
  hideArrow?: boolean
}

export interface TooltipColor {
  color: string
  bgColor: string
}

export interface TooltipPosition {
  top: string
  left: string
  transform: string
}