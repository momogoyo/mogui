import React from 'react'

import type { ImageSkeletonProp } from './types'

const ImageSkeleton = React.memo(({
  opacity = 0.5,
  ...props
}: ImageSkeletonProp) => {
  return (
    <div
      className="skeleton"
      {...props}
    >
      
      <style jsx>{`
        .skeleton {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: ${opacity};
          background-image: linear-gradient(270deg, #fafafa, #eaeaea, #eaeaea, #fafafa);
          background-size: 400% 100%;
          animation: loading 3s ease-in-out infinite;
          transition: all 0.3s ease-out;
        }

        @keyframes loading {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  )
})

ImageSkeleton.displayName = 'MoguiImageSkeleton'
export default ImageSkeleton