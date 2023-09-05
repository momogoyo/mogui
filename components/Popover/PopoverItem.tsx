import { useScale, withScale } from '@/hooks/useScale'
import { PopoverItemProps, defaultItemProps } from './types'
import { usePopoverContext } from '@/contexts/popover'
import { useTheme } from '@/contexts/theme'

const PopoverItemComponent = ({
  line,
  title,
  disableAutoClose,
  className,
  onClick,
  children,
  ...props
}: React.PropsWithChildren<PopoverItemProps> & typeof defaultItemProps) => {
  const theme = useTheme()
  const { SCALES } = useScale()
  const { onItemClick } = usePopoverContext()

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick(event)
    onItemClick(event)

    console.log('click')
  }

  return (
    <div
      className="item line"
      onClick={clickHandler}
      {...props}
    >
      {children}

      <style jsx>{`
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          box-sizing: border-box;
          color: ${theme.palette.accents_2};
          transition: color, background-color 150ms linear;
          line-height: 1.25em;
          font-size: ${SCALES.font(0.875)};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
          padding: ${SCALES.pt(0.5)} ${SCALES.pr(0.75)} ${SCALES.pb(0.5)} ${SCALES.pl(0.75)};
          cursor: pointer;
        }

        .item:hover {
          color: ${theme.palette.foreground};
        }

        .item.line {
          line-height: 0;
          padding: 0;
          background-color: ${theme.palette.border};
          width: ${SCALES.width(1, '100%')};
          height: ${SCALES.height(0.0625)};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        .item.title {
          font-weight: 500;
          font-size: ${SCALES.font(0.925)};
          color: ${theme.palette.foreground};
        }
      `}</style>
    </div>
  )
}

PopoverItemComponent.defaultProps = defaultItemProps
PopoverItemComponent.displayName = 'MoguiPopoverItem'
const PopoverItem = withScale(PopoverItemComponent)

export default PopoverItem