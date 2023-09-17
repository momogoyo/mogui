import { useEffect, useState } from 'react'
import useSSR from '../useSSR'

const getId = () => {
  return Math.random().toString(32).slice(2, 10)
}

const createElement = (id: string) => {
  const element = document.createElement('div')
  element.setAttribute('id', id)
  return element
}

const usePortal = (
  selectId: string = getId(),
  getContainer?: () => HTMLElement | null
) => {
  const id = `mogui-${selectId}`
  const { isBrowser } = useSSR()
  const [elementSnapshot, setElementSnapshot] = useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null
  )

  useEffect(() => {
    const customContainer = getContainer ? getContainer() : null
    const parentElement = customContainer || document.body
    const hasElement = parentElement.querySelector<HTMLElement>(`#${id}`)
    const element = hasElement || createElement(id)

    if (!hasElement) {
      parentElement.appendChild(element)
    }

    setElementSnapshot(element)
  }, [])

  return elementSnapshot
}

export default usePortal