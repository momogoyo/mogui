import { useState, useMemo, useEffect } from 'react'
import { PopoverContext, PopoverConfig } from './PopoverContext'
import Tooltip from '../Tooltip'
import useScale, { provideScale } from '../../hooks/useScale'
import useClasses from '../../hooks/useClasses'
import { usePopoverContext } from './PopoverContext'
import { getReactNode } from '@momogoyo/shared'

import type { PopoverProps } from './types'

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
  const { SCALES } = useScale()
  const classes = useClasses('popover', portalClassName)
  const textNode = useMemo(() => getReactNode(content), [content])
  
  const contextValue = useMemo<PopoverConfig>(() => ({
    onItemClick: () => onPopoverVisibleChange(false),
    disableItemsAutoClose
  }), [disableItemsAutoClose])
  
  const onPopoverVisibleChange = (next: boolean) => {
    setVisible(next)
    onVisibleChange(next)
  }

  useEffect(() => {
    if (customVisible === undefined) return 
    onPopoverVisibleChange(customVisible)
  }, [customVisible])

  disableItemsAutoClose

  return (
    <PopoverContext.Provider value={contextValue}>
      <Tooltip
        text={textNode}
        trigger={trigger}
        placement={placement}
        portalClassName={classes}
        visible={visible}
        onVisibleChange={onPopoverVisibleChange}
        {...props}
      >
        {children}

        {/* @ts-ignore */}
        <style jsx>{`
          :global(.tooltip-content.popover > .inner) {
            padding: ${SCALES.pt(0.9)} ${SCALES.pr(0)} ${SCALES.pb(0.9)} ${SCALES.pl(0)};
          }
        `}</style>
      </Tooltip>
    </PopoverContext.Provider>
  )
}

PopoverComponent.displayName = 'MoguiPopover'
const Popover: React.FC<React.PropsWithChildren<PopoverProps>> = provideScale(PopoverComponent)

export default Popover