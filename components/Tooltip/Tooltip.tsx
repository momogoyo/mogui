import { useRef, useState } from 'react'
import { useClasses } from '@/hooks/useClasses'
import TooltipContent from './TooltipContent'

export type TooltipTypes = 
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'dark'
  | 'lite'

export type Placement =
  | 'topStart'
  | 'topEnd'
  | 'left'
  | 'leftStart'
  | 'leftEnd'
  | 'bottom'
  | 'bottomStart'
  | 'bottomEnd'
  | 'right'
  | 'rightStart'
  | 'rightEnd'

interface Props {
  text?: string,
  visible?: boolean,
  initialVisible?: boolean,
  hideArrow?: boolean,
  type?: TooltipTypes,
  placement?: Placement,
  trigger?: 'click' | 'hover',
  enterDelay?: number,
  leaveDelay?: number,
  offset?: number,
  className?: string
  portalClassName?: string
  onVisibilityChange?: (visible: boolean) => void
}

const defaultProps = {
  text: '',
  visible: false,
  initialVisible: false,
  hideArrow: false,
  type: 'default',
  placement: 'bottom',
  trigger: 'click',
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  portalClassName: '',
  onVisibilityChange: (() => {}) as (visible: boolean) => void
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TooltipProps = Props & NativeAttrs

const Tooltip = ({
  text,
  visible: customVisible,
  initialVisible,
  hideArrow,
  type,
  placement,
  trigger,
  enterDelay,
  leaveDelay,
  offset,
  portalClassName,
  onVisibilityChange,
  children,
  ...props
}: React.PropsWithChildren<TooltipProps> & typeof defaultProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(initialVisible)

  const contentProps = {
    type,
    visible,
    offset,
    hideArrow,
    placement,
    parent: ref,
    className: portalClassName
  }

  return (
    <div
      ref={ref}
      {...props}
      className='tooltip'
    >
      {children}
      <TooltipContent {...contentProps}>{text}</TooltipContent>
      <style jsx>{`
        .tooltip {
          width: max-content;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default Tooltip