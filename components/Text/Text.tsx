import React, { useMemo } from 'react'
import TextChild from './Child'
import { withScale } from '@/hooks/useScale'

import type { NormalTypes, TextElement } from '@/types/props-types'

interface TextProps {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  b?: boolean
  small?: boolean
  i?: boolean
  span?: boolean
  del?: boolean
  em?: boolean
  blockquote?: boolean
  children?: React.ReactNode
  className?: string
  type?: NormalTypes
}

type ElementMap = { [key in keyof JSX.IntrinsicElements]?: boolean }
type TextRenderableElements = Array<TextElement>

const defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  b: false,
  small: false,
  i: false,
  span: false,
  del: false,
  em: false,
  blockquote: false,
  className: '',
  type: 'default' as NormalTypes
}

const TextComponent = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  b,
  small,
  i,
  span,
  del,
  em,
  blockquote,
  children,
  className,
  ...props
}: TextProps & typeof defaultProps) => {
  const elements: ElementMap = { h1, h2, h3, h4, h5, h6, p, blockquote }
  const inlineElements: ElementMap = { span, small, b, em, i, del }
  // @ts-ignore
  const names = Object.keys(elements).filter((name: TextElement) => elements[name]) as TextRenderableElements
  // @ts-ignore
  const inlineNames = Object.keys(inlineElements).filter((name: TextElement) => inlineElements[name]) as TextRenderableElements

  const tag = useMemo(() => {
    if (names[0]) return names[0]
    if (inlineNames[0]) return inlineNames[0]
    return 'p' as TextElement
  }, [names, inlineNames])

  const modifers = useMemo(() => {
    return children
  }, [children])

  return (
    <TextChild
      className={className}
      tag={tag}
      {...props}
    >
      {modifers}
    </TextChild>
  )
}

TextComponent.defaultProps = defaultProps
TextComponent.displayName = 'MoguiText'
const Text = withScale(TextComponent)

export default Text