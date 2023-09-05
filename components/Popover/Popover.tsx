import { useEffect, useMemo, useState } from 'react'
import { PopoverConfig, PopoverContext } from '@/contexts/popover'
import { useScale, withScale } from '@/hooks/useScale'
import Tooltip from '@/components/Tooltip'
import { PopoverProps, defaultProps } from './types'

const PopoverComponent = ({
  content,
  visible: customVisible,
  initialVisible,
  hideArrow,
  placement,
  trigger,
  enterDelay,
  leaveDelay,
  offset,
  portalClassName,
  onVisibleChange,
  disableItemsAutoClose,
  children,
  ...props
}: React.PropsWithChildren<PopoverProps> & typeof defaultProps) => {
  const { SCALES } = useScale()
  const [visible, setVisible] = useState<boolean>(false)
  const onChildClick = () => {
    onPopoverVisibleChange(false)
  }
  
  const value = useMemo<PopoverConfig>(
    () => ({
      disableItemsAutoClose,
      onItemClick: onChildClick
    }),
    [disableItemsAutoClose]
  )

  const onPopoverVisibleChange = (next: boolean) => {
    setVisible(next)
    onVisibleChange(next)
  }
  
  useEffect(() => {
    if (customVisible === undefined) return
    onPopoverVisibleChange(customVisible)
  }, [customVisible])

  return (
    <PopoverContext.Provider value={value}>
      <Tooltip
        initialVisible={false} hideArrow={false} enterDelay={0} leaveDelay={0} offset={0}
        text={''}
        visible={visible}
        placement={placement}
        trigger={trigger}
        portalClassName={'popover'}
        onVisibleChange={onPopoverVisibleChange}
        {...props}
      >
        {children}

        <style jsx>{`
          :global(.tooltip-content.popover > .inner) {
            padding: ${SCALES.pt(0.9)} ${SCALES.pr(0)} ${SCALES.pb(0.9)} ${SCALES.pl(0)};
          }
        `}</style>
      </Tooltip>
    </PopoverContext.Provider>
  )
}

PopoverComponent.defaultProps = defaultProps
PopoverComponent.displayName = 'MoguiPopover'
const Popover = withScale(PopoverComponent)

export default Popover