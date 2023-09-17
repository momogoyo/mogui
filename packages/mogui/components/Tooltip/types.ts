import React from 'react'
import { tuple } from '@momogoyo/shared'

import type { ColorTypes } from '../Themes'

const triggerTypes = tuple('hover', 'click')
type TriggerTypes = typeof triggerTypes[number]

interface Props {
  type?: ColorTypes
  text?: string | React.ReactNode
  initialVisible?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  trigger?: TriggerTypes
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, & keyof Props>
export type TooltipProps = Props & NativeAttrs

export interface TooltipContentProps {
  type?: ColorTypes
  visible?: boolean
}

export interface TooltipColor {
  color: string
  bgColor: string
}