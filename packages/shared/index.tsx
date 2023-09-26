export const tuple = <T extends string[]>(...args: T) => args

export const isCSSNumberValue = (value?: string | number) =>
  value !== undefined && !Number.isNaN(+value)