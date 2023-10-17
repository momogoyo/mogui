type CardType = 
  | 'default'
  | 'primary'
  | 'rose'
  | 'blue'
  | 'green'
  | 'orange'
  | 'yellow'
  | 'cement'
  | 'stone'
  | 'red'
  | 'violet'
  | 'white'
  | 'background'
  | 'foreground'
  | 'border'

export interface Props {
  hoverable?: boolean
  shadow?: boolean
  type?: CardType
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardProps = Props & NativeAttrs