import { tuple } from '@momogoyo/shared'

const cardType = tuple(
    'default',
    'secondary',
    'success',
    'warning',
    'error',
  )

export type CardType = typeof cardType[number]

export interface Props {
  hoverable?: boolean
  shadow?: boolean
  type?: CardType
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardProps = Props & NativeAttrs