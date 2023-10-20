import type { TooltipPosition } from '../types';
import type { Placement, ParentRect, TooltipPlacementPosition } from './types';
export declare const getRect: (ref: React.MutableRefObject<HTMLElement | null>) => ParentRect;
export declare const getPosition: (placement: Placement, rect: ParentRect, offset: number) => TooltipPosition;
export declare const getPlacementPosition: (placement: Placement, offsetX: string, offsetY: string, offsetAbsolute?: string) => TooltipPlacementPosition;
