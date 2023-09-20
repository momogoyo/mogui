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
  console.log(rect, offset)
  
  const positions: { [key in Placement]: TooltipPosition } = {
    top: {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      transform: 'translate(-50%)',
    },
    topStart: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    topEnd: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    left: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    leftStart: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    leftEnd: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    bottom: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    bottomStart: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    bottomEnd: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    right: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    rightStart: {
      top: `px`,
      left: `px`,
      transform: '',
    },
    rightEnd: {
      top: `px`,
      left: `px`,
      transform: '',
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
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    topEnd: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    left: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    leftStart: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    leftEnd: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    bottom: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    bottomStart: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    bottomEnd: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    right: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    rightStart: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    },
    rightEnd: {
      top: '',
      right: '',
      left: '',
      bottom: ``,
      transform: ''
    }
  }

  return positions[placement] || (positions.top as TooltipPlacementPosition)
}