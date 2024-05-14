import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import type { SelectInputProps } from './types'

const SelectInput = forwardRef<HTMLInputElement | null, SelectInputProps>(({
  visible,
  onBlur,
  onFocus
}, inputRef) => {
  const ref = useRef<HTMLInputElement | null>(null)

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => ref.current
  )

  useEffect(() => {
    if (visible) {
      ref.current?.focus()
    }
  }, [visible])

  return (
    <>
      <input 
        ref={ref}
        type="search"
        readOnly
        aria-expanded={visible}
        onBlur={onBlur}
        onFocus={onFocus}
      />

      <style jsx>{`
        input {
          display: none;
        }
      `}</style>
    </>
  )
})

SelectInput.displayName = 'MoguiSelectInput'
export default SelectInput