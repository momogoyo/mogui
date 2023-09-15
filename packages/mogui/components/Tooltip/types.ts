import React from 'react'
import type { ColorTypes } from '../Themes'

interface Props {
  type?: ColorTypes
  text?: string | React.ReactNode
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, & keyof Props>
export type TooltipProps = Props & NativeAttrs

export interface TooltipContentProps {
  type?: ColorTypes
}

export interface TooltipColor {
  color: string
  bgColor: string
}