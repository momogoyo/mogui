import { useRef, useState, useMemo, useEffect } from 'react'
import { transformDataSource } from '@momogoyo/shared'
import useClasses from '../../hooks/useClasses'
import useScale, { provideScale } from '../../hooks/useScale'
import useTheme from '../../hooks/useTheme'
import ImageSkeleton from './ImageSkeleton'

import type { ImageProp } from './types'

const ImageComponent = ({
  src = '',
  disableSkeleton = false,
  maxDelay = 3000,
  className = '',
  ...props
}: ImageProp) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [skeleton, setSkeleton] = useState<boolean>(true)
  const imageRef = useRef<HTMLImageElement>(null)
  const url = useMemo(() => transformDataSource(src), [src])
  const showSkeleton = !disableSkeleton

  const theme = useTheme()
  const classes = useClasses('image', className)
  const { SCALES } = useScale()
  
  const imageLoaded = () => {
    if (!showSkeleton) return
    
    setLoading(false)
  }

  useEffect(() => {
    if (!showSkeleton) return
    if (!imageRef.current) return

    if (imageRef.current.complete) {
      setLoading(false)
      setSkeleton(false)
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSkeleton) {
        setSkeleton(false)
      }
    }, maxDelay)

    return (() => clearTimeout(timer))
  }, [loading])
  
  return (
    <div className={classes}>
      {skeleton && showSkeleton && <ImageSkeleton opacity={loading ? 0.5 : 0} />}
      <img
        ref={imageRef}
        src={url}
        onLoad={imageLoaded}
        {...props}
      />

      {/* @ts-ignore */}
      <style>{`
        .image {
          position: relative;
          border-radius: ${theme.layout.radius};
          overflow: hidden;
          max-width: 100%;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0, 'auto')} ${SCALES.mb(0)} ${SCALES.ml(0, 'auto')};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
        }

        img {
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          object-fit: scale-down;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

ImageComponent.displayName = 'MoguiImage'
const Image: React.FC<ImageProp> = provideScale(ImageComponent)

export default Image