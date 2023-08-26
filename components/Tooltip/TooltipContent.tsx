import { TooltipTypes, Placement } from './Tooltip'

interface Props {
  parent?: React.MutableRefObject<HTMLElement | null> | undefined
  placement: Placement
  type: TooltipTypes
  visible: boolean
  hideArrow: boolean
  offset: number
  className?: string
}

const TooltipContent = ({
  children,
  parent,
  visible,
  offset,
  placement,
  type,
  className,
  hideArrow,
}: React.PropsWithChildren<Props>) => {
  return (
    <div></div>
  )
}

export default TooltipContent