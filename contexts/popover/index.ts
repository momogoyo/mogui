import React, { useContext } from 'react'

export type PopoverConfig = {
  disableItemsAutoClose: boolean
  onItemClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const defaultContext = {
  disableItemsAutoClose: false,
  onItemClick: () => {}
}

export const PopoverContext = React.createContext<PopoverConfig>(defaultContext)
export const usePopoverContext = () => useContext<PopoverConfig>(PopoverContext)