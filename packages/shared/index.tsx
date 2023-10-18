export const tuple = <T extends string[]>(...args: T) => args

export const isCSSNumberValue = (value?: string | number) => value !== undefined && !Number.isNaN(+value)

export const getReactNode = (node?: React.ReactNode | (() => React.ReactNode)): React.ReactNode => {
  if (!node) return null
  if (typeof node !== 'function') return node

  return (node as () => React.ReactNode)()
}

// URI로 데이터를 전달하기 위해서 인코딩
export const transformDataSource = (src: string) => {
  const left = src.slice(0, 4)
  // 인코딩 된 <svg> 문자열: %3Csvg
  if (encodeURIComponent(left) === '%3Csvg') {
    return `data:image/svg+xml;utf8,${src}`
  }

  return src
}