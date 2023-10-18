import { useRef, useState, useMemo, useEffect } from 'react'
import { transformDataSource } from '@momogoyo/shared'
import useClasses from '../../hooks/useClasses'
import useScale from '../../hooks/useScale'
import useTheme from '../../hooks/useTheme'
import ImageSkeleton from './ImageSkeleton'

import type { ImageProp } from './types'

const Image = ({
  src = '',
  disableSkeleton = false,
  maxDelay = 3000,
  className = '',
  ...props
}: ImageProp) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [skeleton, setSkeleton] = useState<boolean>(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const theme = useTheme()
  const classes = useClasses('image', className)
  const { SCALES } = useScale()
  const url = useMemo(() => transformDataSource(src), [src])
  const showSkeleton = !disableSkeleton
  
  const imageLoaded = () => {
    if (!showSkeleton) return
    
    setLoading(false)
  }

  useEffect(() => {
    if (!showSkeleton) return
    if (!imageRef.current) return

    setLoading(false)
    setSkeleton(false)
  }, [])

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
      {skeleton && !disableSkeleton && <ImageSkeleton opacity={loading ? 0.5 : 0} />}
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
          max-width: 100%;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          border-radius: ${theme.layout.radius};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0, 'auto')} ${SCALES.mb(0)} ${SCALES.ml(0, 'auto')};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
        }

        img {
          display: inline-block;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          object-fit: scale-down;
        }
      `}</style>
    </div>
  )
}

export default Image