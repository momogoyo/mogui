import { useMemo } from 'react'
import type { NormalTypes, TextElement } from '@/types/props-types'
import { useTheme } from '@/hooks/useTheme'
import { useScale } from '@/hooks/useScale'

interface TextChildProps {
  tag?: TextElement
  type?: NormalTypes
  className?: string
  children?: React.ReactNode
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

const TextChildComponent = ({
  tag,
  type,
  className,
  children,
  ...props
}: TextChildProps & typeof defaultProps) => {
  const Component = tag as TextElement
  const theme = useTheme()
  const { SCALES, getScaleProps } = useScale()
  const color = useMemo(() => getTypeColor(type, theme.palette), [type, theme.palette])
  const px = getScaleProps(['padding', 'paddingLeft', 'paddingRight', 'pl', 'pr', 'px'])
  const py = getScaleProps(['padding', 'paddingTop', 'paddingBottom', 'pt', 'pb', 'py'])
  const classNames = useMemo(() => {
    const keys = [
      { value: px, className: 'px' },
      { value: py, className: 'py' }
    ]
    const scaleClassNames = keys.reduce((prev, next) => {
      if (typeof next.value === 'undefined') return prev
      return `${prev} ${next.className}`
    }, '')
    return `${scaleClassNames} ${className}`.trim()
  }, [px, py, className])

  return (
    <Component
      className={classNames}
      {...props}
    >
      {children}

      <style jsx>{`
        ${tag} {
          color: ${color};
        }
        .px {
          padding-left: ${SCALES.pl(0, 'revert')};
          padding-right: ${SCALES.pr(0, 'revert')};
        }
        .py {
          padding-top: ${SCALES.pt(0, 'revert')};
          padding-bottom: ${SCALES.pb(0, 'revert')};
        }
      `}</style>
    </Component>
  )
}

export default TextChildComponent