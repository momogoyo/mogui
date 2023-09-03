import React, { useContext } from 'react'

export type PopoverConfig = {
  disableItemAutoClose: boolean
  onItemClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const defaultContext = {
  disableItemAutoClose: false,
  onItemClick: () => {}
}

export const PopoverContext = React.createContext<PopoverConfig>(defaultContext)
export const usePopoverContext = () => useContext<PopoverConfig>(PopoverContext)