import { tuple } from '@momogoyo/shared'
import { CSSProperties } from 'react'

const normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error')
export type NormalTypes = typeof normalTypes[number]

export type SelectRef = {
  focus: () => void
  blur: () => void
  scrollTo?: (options?: ScrollToOptions) => void
}

export type SelectTypes = NormalTypes

interface Props {
  disabled?: boolean
  type?: SelectTypes
  value?: string | string[]
  initialValue?: string | string[]
  placeholder?: React.ReactNode | string
  icon?: React.ComponentType
  onChange?: (value: string | string[]) => void
  pure?: boolean
  multiple?: boolean
  clearable?: boolean
  className?: string
  dropdownClassName?: string
  dropdownStyle?: CSSProperties
  disableMatchWidth?: boolean
  onDropdownVisibleChange?: (visible: boolean) => void
  getPopupContainer?: () => HTMLElement | null
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type SelectProps = Props & NativeAttrs
