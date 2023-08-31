const DefaultRect = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0
}

export const getRect = (ref: React.MutableRefObject<HTMLElement | null>) => {
  if (!ref || !ref.current) return DefaultRect

  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft,
    bottom: rect.bottom + document.documentElement.scrollTop
  }
}