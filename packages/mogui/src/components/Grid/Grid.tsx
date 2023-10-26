import { provideScale } from '@/hooks/useScale'
import useClasses from '@/hooks/useClasses'

import type { GridProps } from './types'

const GridComponent = ({
  children,
  className = '',
  ...props
}: React.PropsWithChildren<GridProps>) => {
  const classes = useClasses('grid', className)

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  )
}

GridComponent.display = 'MoguiGrid'
const Grid = provideScale(GridComponent)

export default Grid