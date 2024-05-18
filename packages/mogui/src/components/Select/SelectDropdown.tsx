import { useRef, PropsWithChildren } from 'react'
import useClasses from '@/hooks/useClasses'

import Transition from '@/components/Transition'

import type { SelectDropdownProps } from './types'

const SelectDropdown = ({
  children,
  className,
  visible,
}: PropsWithChildren<SelectDropdownProps>) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const classes = useClasses('select-dropdown', className)

  return (
    <Transition visible={visible}>
      <div
        ref={dropdownRef}
        className={classes}
      >
        {children}
      </div>
    </Transition>
  )
}

SelectDropdown.displayName = 'MoguiSelectDropdown'
export default SelectDropdown