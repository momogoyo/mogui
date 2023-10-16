import { provideScale } from '../../hooks/useScale'
import useClasses from '../../hooks/useClasses'
import useTheme from '../../hooks/useTheme'
import useScale from '../../hooks/useScale'
import { usePopoverContext } from './PopoverContext'

import type { PopoverItemProps } from './types'

const PopoverItemComponent = ({
  line = false,
  title = false,
  disableAutoClose = false,
  onClick,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<PopoverItemProps>) => {
  const theme = useTheme()
  const { SCALES } = useScale()
  const { disableItemsAutoClose, onItemClick } = usePopoverContext()
  const classes = useClasses('item', { line, title }, className)
  const hasHandler = Boolean(onClick)
  const isNotAutoClose = disableAutoClose || disableItemsAutoClose || line || title

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick(event)

    if (isNotAutoClose) return event.stopPropagation()
    
    onItemClick(event)
  }

  return (
    <>
      <div
        className={classes}
        onClick={clickHandler}
        {...props}
      >
        {children}
        
        {/* @ts-ignore */}
        <style jsx>{`
          .item {
            display: flex;
            cursor: ${hasHandler ? 'pointer' : 'default'};
          }
        `}</style>
      </div>
      {title && <PopoverItem line title={false} />}
    </>
  )
}

PopoverItemComponent.displayName = 'MoguiPopoverItem'
const PopoverItem: React.FC<React.PropsWithChildren<PopoverItemProps>> = provideScale(PopoverItemComponent)
export default PopoverItem