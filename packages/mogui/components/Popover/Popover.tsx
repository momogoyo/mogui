import { useState, useMemo, useEffect } from 'react'
import { PopoverContext, PopoverConfig } from './PopoverContext'
import Tooltip from '../Tooltip'
import { provideScale } from '../../hooks/useScale'
import useClasses from '../../hooks/useClasees'
import { getReactNode } from '@momogoyo/shared'

import type { PopoverProps } from './types'

const PopoverComponent = ({
  content = '',
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

  useEffect(() => {
    if (customVisible === undefined) return 
    onPopoverVisibleChange(customVisible)
  }, [customVisible])

  return (
    <Tooltip
      text={textNode}
      trigger={trigger}
      placement={placement}
      visible={visible}
      onVisibleChange={onPopoverVisibleChange}
      portalClassName={useClasses('popover', portalClassName)}
      {...props}
    >
      {children}

      {/* @ts-ignore */}
      <style jsx>{``}</style>
    </Tooltip>
  )
}

PopoverComponent.displayName = 'MoguiPopover'
const Popover: React.FC<React.PropsWithChildren<PopoverProps>> = provideScale(PopoverComponent)

export default Popover