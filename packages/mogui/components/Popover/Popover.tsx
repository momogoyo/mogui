import { useState, useMemo, useEffect } from 'react'
import { PopoverContext, PopoverConfig } from './PopoverContext'
import Tooltip from '../Tooltip'
import { getReactNode } from '@momogoyo/shared'

import type { PopoverProps } from './types'
import { provideScale } from 'hooks/useScale'

const PopoverComponent = ({
  content,
  initialVisible = false,
  onVisibleChange = (() => {}),
  visible: customVisible,
  disableItemsAutoClose = false,
  trigger = 'click',
  enterDelay = 100,
  leaveDelay = 150,
  placement = 'bottom',
  offset = 12,
  className = '',
  portalClassName = '',
  hideArrow = false,
  children,
  ...props
}: React.PropsWithChildren<PopoverProps>) => {
  const [visible, setVisible] = useState<boolean>(initialVisible)
  const textNode = useMemo(() => getReactNode(content), [content])
  
  const onPopoverVisibleChange = (next: boolean) => {
    setVisible(next)
    onVisibleChange(next)
  }

  const value = useMemo<PopoverConfig>(() => ({
    disableItemsAutoClose,
    onItemClick: () => onPopoverVisibleChange(false)
  }), [disableItemsAutoClose])

  useEffect(() => {
    if (customVisible === undefined) return 
    onPopoverVisibleChange(customVisible)
  }, [customVisible])

  return (
    <PopoverContext.Provider value={value}>
      <Tooltip
        text={textNode}
        trigger={trigger}
        placement={placement}
        visible={visible}
        onVisibleChange={onPopoverVisibleChange}
        {...props}
      >
        {children}

        {/* @ts-ignore */}
        <style jsx>{``}</style>
      </Tooltip>
    </PopoverContext.Provider>
  )
}

PopoverComponent.displayName = 'MoguiPopover'
const Popover: React.FC<React.PropsWithChildren<PopoverProps>> = provideScale(PopoverComponent)

export default Popover