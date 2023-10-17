interface Props {
  src: string
  disableSkeleton?: boolean
  maxDelay?: number
  className?: string
}

type NativeAttrs = Omit<React.ImgHTMLAttributes<any>, keyof Props>
export type ImageProp = Props & NativeAttrs