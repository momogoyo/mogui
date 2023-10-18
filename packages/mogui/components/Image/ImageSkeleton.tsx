import type { ImageSkeletonProp } from './types'

const ImageSkeleton = ({
  opacity = 0.5,
  ...props
}: ImageSkeletonProp) => {
  return (
    <div></div>
  )
}

export default ImageSkeleton