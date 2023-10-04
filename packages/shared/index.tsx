export const tuple = <T extends string[]>(...args: T) => args

export const isCSSNumberValue = (value?: string | number) => value !== undefined && !Number.isNaN(+value)

export const getReactNode = (node?: React.ReactNode | (() => React.ReactNode)): React.ReactNode => {
  if (!node) return null
  if (typeof node !== 'function') return node

  return (node as () => React.ReactNode)()
}