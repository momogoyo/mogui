import { useState, useEffect } from 'react'

export const isCSSNumberValue = (value?: string | number) => value !== undefined && !Number.isNaN(+value)

export const isBrowser = (): boolean => {
  return Boolean(
    typeof window !== 'undefined' && window.document && window.document.createElement,
  )
}

export const useSSR = () => {
  const [browser, setBrowser] = useState<boolean>(false)
  useEffect(() => {
    setBrowser(isBrowser())
  }, [])

  return {
    isBrowser: browser,
    isServer: !browser
  }
}