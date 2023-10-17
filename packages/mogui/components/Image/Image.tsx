import useClasses from '@hooks/useClasses'

import type { ImageProp } from './types'

const Image = ({
  src = '',
  disableSkeleton = false,
  maxDelay = 3000,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<ImageProp>) => {
  const classes = useClasses('image', className)

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  )
}

export default Image