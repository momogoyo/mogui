import React from 'react'

import type { SelectConfig } from './types'

const defaultContext = {
  visible: false,
  disableAll: false
}

export const SelectContext = React.createContext<SelectConfig>(defaultContext)

export const useSelectContext = (): SelectConfig => React.useContext(SelectContext)