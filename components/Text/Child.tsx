import { useMemo } from 'react'
import type { NormalTypes } from '@/types/props-types'
import { useTheme } from '@/hooks/useTheme'
import { useScale } from '@/hooks/useScale'

interface Props {
  tag?: keyof JSX.IntrinsicElements
  type?: NormalTypes
  className?: string
}

const defaultProps = {
  type: 'default' as NormalTypes,
  className: ''
}

const getTypeColor = (type: NormalTypes, palette: any) => {
  const colors: {
    [key in NormalTypes]: string
  } = {
    default: 'inherit',
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  }

  return colors[type] || colors.default
}

type NativeAttrs = Omit<React.DetailsHTMLAttributes<any>, keyof Props>
export type TextChildProps = Props & NativeAttrs

const TextChild = ({
  tag,
  type,
  className,
  children,
  ...props
}: React.PropsWithChildren<TextChildProps> & typeof defaultProps) => {
  const Component = tag as keyof JSX.IntrinsicElements
  const theme = useTheme()
  const { SCALES, getScaleProps } = useScale()
  const font = getScaleProps('font')
  const px = getScaleProps(['padding', 'paddingLeft', 'paddingRight', 'pl', 'pr', 'px'])
  const py = getScaleProps(['padding', 'paddingTop', 'paddingBottom', 'pt', 'pb', 'py'])
  const mx = getScaleProps(['margin', 'marginLeft', 'marginRight', 'ml', 'mr', 'mx'])
  const my = getScaleProps(['margin', 'marginTop', 'marginBottom', 'mt', 'mb', 'my'])
  const color = useMemo(() => getTypeColor(type, theme.palette), [type, theme.palette])
  const classNames = useMemo(() => {
    const keys = [
      { value: px, className: 'px' },
      { value: py, className: 'py' },
      { value: mx, className: 'mx' },
      { value: my, className: 'my' },
      { value: font, className: 'font' },
    ]
    const scaleClassNames = keys.reduce((prev, next) => {
      if (typeof next.value === 'undefined') return prev
      return `${prev} ${next.className}`
    }, '')
    return `${scaleClassNames} ${className}`.trim()
  }, [px, py, mx, my, font, className])

  return (
    <Component
      className={classNames}
      {...props}
    >
      {children}

      <style jsx>{`
        ${tag} {
          color: ${color};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
        }
        .font {
          font-size: ${SCALES.font(1, 'inherit')};
        }
        .px {
          padding-left: ${SCALES.pl(0, 'unset')};
          padding-right: ${SCALES.pr(0, 'unset')};
        }
        .py {
          padding-top: ${SCALES.pt(0, 'unset')};
          padding-bottom: ${SCALES.pb(0, 'unset')};
        }
        .mx {
          margin-left: ${SCALES.ml(0, 'unset')};
          margin-right: ${SCALES.mr(0, 'unset')};
        }
        .my {
          margin-top: ${SCALES.mt(0, 'unset')};
          margin-bottom: ${SCALES.mb(0, 'unset')};
        }
      `}</style>
    </Component>
  )
}

TextChild.defaultProps = defaultProps
TextChild.displayName = 'MoguiText'

export default TextChild