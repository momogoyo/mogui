import type { Placement } from '../types'

export interface TooltipIconPosition {
  top: string
  left: string
  right: string
  bottom: string
  transform: string
}

export const getIconPosition = (
  placement: Placement,
  offsetX: string,
  offsetY: string,
  offsetAbsolute: string = '3px'
): TooltipIconPosition => {
  const positions: { [key in Placement]?: TooltipIconPosition } = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: `${offsetAbsolute}`,
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: `${offsetX}`,
      bottom: `${offsetAbsolute}`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topEnd: {
      top: 'auto',
      right: `${offsetX}`,
      left: 'auto',
      bottom: `${offsetAbsolute}`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: `${offsetAbsolute}`,
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomStart: {
      top: `${offsetAbsolute}`,
      right: 'auto',
      left: `${offsetX}`,
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: `${offsetAbsolute}`,
      right: `${offsetX}`,
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftStart: {
      top: `${offsetY}`,
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: `${offsetY}`,
      transform: 'translate(100%, 50%) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightStart: {
      top: `${offsetY}`,
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: `${offsetY}`,
      transform: 'translate(-100%, 50%) rotate(0deg)'
    }
  }

  return positions[placement] || (positions.top as TooltipIconPosition)
}