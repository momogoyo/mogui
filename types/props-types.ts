const normalTypes = [
  'default',
  'secondary',
  'success',
  'warning',
  'error'
]

export type NormalTypes = typeof normalTypes[number]
export type TextElement = keyof JSX.IntrinsicElements