import { useMemo } from 'react'
import { PopoverConfig, PopoverContext } from '@/contexts/popover'
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
  const value = useMemo<PopoverConfig>(
    () => ({
      disableItemAutoClose: false,
      onItemClick: () => {}
    }),
    [disableItemAutoClose]
  )

  return (
    <PopoverContext.Provider value={value}>
      <Tooltip
        text={''}
        visible={false}
        initialVisible={false}
        hideArrow={false}
        placement={'top'}
        trigger={'hover'}
        enterDelay={0}
        leaveDelay={0}
        offset={0}
        portalClassName={''}
        onVisibleChange={(visible: boolean): void => {}}
        {...props}
      >
        {children}
      </Tooltip>
    </PopoverContext.Provider>
  )
}

export default PopoverComponent