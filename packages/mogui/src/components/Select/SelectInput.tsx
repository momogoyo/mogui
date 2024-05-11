import { useRef, useState } from "react"

const SelectInput = ({
  visible,
  onBlur,
  onFocus
}, inputRef) => {
  const ref = useRef<HTMLInputElement | null>(null)

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
    </>
  )
}

SelectInput.displayName = 'MoguiSelectInput'
export default SelectInput