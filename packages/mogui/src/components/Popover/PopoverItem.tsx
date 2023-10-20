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
            justify-content: flex-start;
            align-items: center;
            color: ${theme.palette.background};
            transition: color, background-color 1.5s linear;
            line-height: 1.25em;
            font-size: ${SCALES.font(0.875)};
            width: ${SCALES.width(1, 'auto')};
            height: ${SCALES.height(1, 'auto')};
            margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
            padding: ${SCALES.pt(0.5)} ${SCALES.pr(0.75)} ${SCALES.pb(0.5)} ${SCALES.pl(0.75)};
            cursor: ${hasHandler ? 'pointer' : 'default'};
          }

          .item:hover {
            color: ${theme.palette.foreground};
          }

          .item.line {
            line-height: 0;
            padding: 0;
            background-color: ${theme.palette.border};
            height: ${SCALES.height(0.0625)};
            margin: ${SCALES.mt(0.35)} ${SCALES.mr(0)} ${SCALES.mb(0.35)} ${SCALES.ml(0)};
            width: ${SCALES.width(1, '100%')};
          }

          .item.title {
            font-weight: 500;
            font-size: ${SCALES.font(0.925)};
            color: ${theme.palette.foreground};
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