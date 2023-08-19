import { useMemo } from 'react'
import type { NormalTypes, TextElement } from '../../types/props-types'

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
  const color = useMemo(() => getTypeColor(type, 'red'), [type])

  return (
    <Component
      className={className}
      {...props}
    >
      {children}

      <style jsx>{`
        ${tag} {
          color: ${color};
        }
      `}</style>
    </Component>
  )
}

export default TextChildComponent