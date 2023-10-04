import type { TooltipPosition } from '../types'
import type { Placement, ParentRect, TooltipPlacementPosition } from './types'

export const getRect = (
  ref: React.MutableRefObject<HTMLElement | null>
): ParentRect => {
  const defaultRect = {
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    width: 0,
    height: 0
  }
  if (!ref) return defaultRect

  const rect = ref.current.getBoundingClientRect()
  return {
    top: rect.top + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft,
    bottom: rect.bottom + document.documentElement.scrollTop,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top
  }
}

export const getPosition = (
  placement: Placement,
  rect: ParentRect,
  offset: number,
): TooltipPosition => {
  const positions: { [key in Placement]: TooltipPosition } = {
    top: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + (rect.width / 2)}px`,
      transform: 'translate(-50%, -100%)',
    },
    topStart: {
      top: `${rect.top - offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0%, -100%)',
    },
    topEnd: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, -100%)',
    },
    left: {
      top: `${rect.top + (rect.height / 2)}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -50%)',
    },
    leftStart: {
      top: `${rect.top}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, 0%)',
    },
    leftEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -100%)',
    },
    bottom: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + (rect.width / 2)}px`,
      transform: 'translate(-50%, 0)',
    },
    bottomStart: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, 0)',
    },
    bottomEnd: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width}px`, // rect.right
      transform: 'translate(-100%, 0)',
    },
    right: {
      top: `${rect.top + (rect.height / 2)}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -50%)',
    },
    rightStart: {
      top: `${rect.top}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, 0)',
    },
    rightEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -100%)',
    }
  }

  return positions[placement] || (positions.top as TooltipPosition)
}

export const getPlacementPosition = (
  placement: Placement,
  offsetX: string,
  offsetY: string,
  offsetAbsolute: string = '3px'
): TooltipPlacementPosition => {
  const positions: { [key in Placement]: TooltipPlacementPosition } = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: `${offsetAbsolute}`,
      transform: 'translate(-50%, 100%) rotate(-90deg)',
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: `${offsetX}`,
      bottom: `${offsetAbsolute}`,
      transform: 'translate(0, 100%) rotate(-90deg)',
    },
    topEnd: {
      top: 'auto',
      right: `${offsetX}`,
      left: 'auto',
      bottom: `${offsetAbsolute}`,
      transform: 'translate(100%, 100%) rotate(-90deg)',
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
      transform: 'translate(100%, -50%) rotate(180deg)',
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: `${offsetY}`,
      transform: 'translate(100%, 50%) rotate(180deg)',
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
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: `${offsetAbsolute}`,
      right: `${offsetX}`,
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
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
      transform: 'translate(-100%, -50%) rotate(0deg)',
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: `${offsetY}`,
      transform: 'translate(-100%, 50%) rotate(0deg)'
    }
  }

  return positions[placement] || (positions.top as TooltipPlacementPosition)
}