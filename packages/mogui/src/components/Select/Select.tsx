import React, { useEffect, useMemo, useRef, useState } from 'react'
import { provideScale } from '@/hooks/useScale'
import useClasses from '@/hooks/useClasses'

import SelectInput from './SelectInput'

import type { SelectProps } from './types'

const SelectComponent = ({
  children,
  type,
  disabled,
  initialValue: init,
  value: customValue,
  icon: Icon,
  pure,
  onChange,
  multiple,
  clearable,
  placeholder,
  className,
  dropdownClassName,
  dropdownStyle,
  disableMatchWidth,
  getPopupContainer,
  onDropdownVisibleChange,
  ...props
}: React.PropsWithChildren<SelectProps>, selectRef) => {
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const [selectFocus, setSelectFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string | string[] | undefined>('')
  
  const isEmpty = useMemo(() => {
    if (!Array.isArray(value)) return !value
    return value.length === 0
  }, [value])

  const classes = useClasses('select', {
    active: selectFocus || visible,
    multiple
  }, className)

  const updateVisible = (next: boolean) => {
    onDropdownVisibleChange(next)
    setVisible(next)
  }

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation() // 상위 관련 다른 모든 이벤트 버블링 차단
    event.nativeEvent.stopImmediatePropagation() // 상위, 현재레벨에 걸려있는 이벤트 모두 동작하지 않도록 중단
    event.preventDefault()

    if (disabled) return
    
    updateVisible(!visible)
  }

  const onInputBlur = () => {

  }

  useEffect(() => {
    if (customValue === undefined) return
    
    setValue(customValue)
  }, [customValue])

  return (
    <div
      className={classes}
      ref={ref}
      onClick={clickHandler}
      {...props}
    >
      <SelectInput 
        ref={inputRef}
        visible={visible}
        onBlur={onInputBlur}
        onFocus={() => setSelectFocus(true)}
      />
      {isEmpty && (
        <span className="value placeholder">
          {/* <Ellipsis>{placeholder}</Ellipsis> */}
        </span>
      )}
    </div>
  )
}

SelectComponent.displayName = 'MoguiSelect'
const Select: React.FC<React.PropsWithChildren<SelectProps>> = provideScale(SelectComponent)

export default Select