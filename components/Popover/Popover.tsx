import { useEffect, useMemo, useState } from 'react'
import { PopoverConfig, PopoverContext } from '@/contexts/popover'
import { withScale } from '@/hooks/useScale'
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
  disableItemAutoClose,
  children,
  ...props
}: React.PropsWithChildren<PopoverProps> & typeof defaultProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const onChildClick = () => {
    onPopoverVisibleChange(false)
  }
  const onPopoverVisibleChange = (next: boolean) => {
    setVisible(next)
    onVisibleChange(next)
  }
  const value = useMemo<PopoverConfig>(
    () => ({
      disableItemAutoClose,
      onItemClick: onChildClick
    }),
    [disableItemAutoClose]
  )

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
        portalClassName={''}
        onVisibleChange={onPopoverVisibleChange}
        {...props}      >
        {children}
      </Tooltip>
    </PopoverContext.Provider>
  )
}

PopoverComponent.defaultProps = defaultProps
PopoverComponent.displayName = 'MoguiPopover'
const Popover = withScale(PopoverComponent)

export default Popover