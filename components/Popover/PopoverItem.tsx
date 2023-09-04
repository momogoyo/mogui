import { withScale } from '@/hooks/useScale'
import { PopoverItemProps, defaultItemProps } from './types'
import { usePopoverContext } from '@/contexts/popover'

const PopoverItemComponent = ({
  line,
  title,
  disableAutoClose,
  className,
  onClick,
  children,
  ...props
}: React.PropsWithChildren<PopoverItemProps> & typeof defaultItemProps) => {
  const { onItemClick } = usePopoverContext()

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick(event)
    onItemClick(event)

    console.log('click')
  }

  return (
    <div
      onClick={clickHandler}
      {...props}
    >
      {children}
    </div>
  )
}

PopoverItemComponent.defaultProps = defaultItemProps
PopoverItemComponent.displayName = 'MoguiPopoverItem'
const PopoverItem = withScale(PopoverItemComponent)

export default PopoverItem