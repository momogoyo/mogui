const normalTypes = [
  'default',
  'secondary',
  'success',
  'warning',
  'error'
]

export type NormalTypes = typeof normalTypes[number]

export const tuple = <T extends string[]>(...args: T) => args