import type { TextElement } from '../../types/props-types'

interface TextChildProps {
  tag?: TextElement
  className?: string
  children?: React.ReactNode
}

const TextChildComponent = ({
  children,
  tag,
  className,
  ...props
}: TextChildProps) => {
  const Component = tag as TextElement

  return (
    <Component
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

export default TextChildComponent