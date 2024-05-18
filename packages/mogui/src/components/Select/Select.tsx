import React, { useEffect, useMemo, useRef, useState } from 'react'
import { provideScale } from '@/hooks/useScale'
import useClasses from '@/hooks/useClasses'
import useTheme from '@/hooks/useTheme'
import useScale from '@/hooks/useScale'

import { tonal } from '@/components/Themes/preset'
import { getColors } from '@/components/Select/styles'
import Ellipsis from '@/components/Ellipsis'
import { SelectContext } from './SelectInputContext'
import SelectInput from './SelectInput'
import SelectDropdown from './SelectDropdown'

import type { SelectProps, SelectConfig } from './types'

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
  const theme = useTheme()
  const { SCALES } = useScale()
  const ref = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const [selectFocus, setSelectFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string | string[] | undefined>('')

  const { placeholderColor, border } = getColors(theme.palette, type)
  
  const isEmpty = useMemo(() => {
    if (!Array.isArray(value)) return !value

    return value.length === 0
  }, [value])

  const classes = useClasses('select', {
    active: selectFocus || visible,
    multiple
  }, className)

  const updateVisible = (next: boolean) => {
    setVisible(next)
  }

  const updateValue = () => {}

  const initialize: SelectConfig = useMemo(() => ({
    value,
    visible,
    updateValue,
    updateVisible,
    ref,
    disableAll: disabled
  }), [visible, disabled, ref, value, multiple])

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
    <SelectContext.Provider value={initialize}>
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
            <Ellipsis height="var(--select-height)">{placeholder}</Ellipsis>
          </span>
        )}

        <SelectDropdown 
          visible={visible}
          className={dropdownClassName}
        >
          {children}
        </SelectDropdown>

        <style jsx>{`
          .select {
            --select-font-size: ${SCALES.font(0.875)};
            --select-height: ${SCALES.height(2.25)};
            
            position: relative;
            display: flex;
            align-items: center;
            max-width: 90vw;
            min-width: 11.5em;
            width: ${SCALES.width(1, 'initial')};
            height: var(--select-height);            
            border: 1px solid ${border};
            border-radius: ${theme.layout.radius};
            background-color: ${disabled ? tonal.grayDark_3 : theme.palette.background};
            padding: ${SCALES.pt(0), SCALES.pl(0.667), SCALES.pb(0), SCALES.pr(0.334)};
            margin: ${SCALES.mt(0), SCALES.ml(0), SCALES.mb(0), SCALES.mr(0)};
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            user-select: none;
            white-space: nowrap;
            overflow: hidden;
            transition: border 150ms ease-in 0s, color 200ms ease-out 0s, box-shadow 200ms ease 0s;
          }

          .value {
            font-size: var(--select-font-size);
            color: ${disabled ? tonal.gray_3 : theme.palette.foreground};
          }

          .placeholder {
            color: ${placeholderColor};
          }
            
        `}</style>
      </div>
    </SelectContext.Provider>
  )
}

SelectComponent.displayName = 'MoguiSelect'
const Select: React.FC<React.PropsWithChildren<SelectProps>> = provideScale(SelectComponent)

export default Select