import { useState, useEffect } from 'react'
import { useSSR } from '@/components/utils'

const createElement = (id: string): HTMLElement => {
  const el = document.createElement('div')
  el.setAttribute('id', id)
  return el
}

export const usePortal = (
  selectedId: string,
  getContainer?: () => HTMLElement | null
) => {
  const id = `Mogui-${selectedId}`
  const { isBrowser } = useSSR()
  const [elSnapshot, setElSnapshot] = useState<HTMLElement | null>(isBrowser ? createElement(id) : null)  
  
  useEffect(() => {
    const createContainer = getContainer ? getContainer() : null
    const parentElememt = createContainer || document.body
    const hasElement = parentElememt.querySelector<HTMLElement>(`#${id}`)
    const el = hasElement || createElement(id)

    if (!hasElement) {
      parentElememt.appendChild(el)
    }

    setElSnapshot(el)
  }, [])

  return elSnapshot
}

export default usePortal
