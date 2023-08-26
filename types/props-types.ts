const normalTypes = [
  'default',
  'secondary',
  'success',
  'warning',
  'error'
]

export type NormalTypes = typeof normalTypes[number]

export const tuple = <T extends string[]>(...args: T) => args

const triggerTypes = tuple('hover', 'click')
export type TriggerTypes = typeof triggerTypes[number]

const placement = tuple(
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd'
)
export type Placement = typeof placement[number]