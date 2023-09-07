import React, { useEffect, useState } from 'react'
import { CssTransitionProps, defaultProps } from './types'

const CssTransition = ({
  children,
  visible,
  className,
  name,
  ...props
}: React.PropsWithChildren<CssTransitionProps> & typeof defaultProps) => {
  const [classes, setClasses] = useState<string>('')

  useEffect(() => {
    setClasses(`${name}-enter`)
  }, [classes])

  if (!React.isValidElement(children)) return null
  const childElement = children as React.ReactElement<any>

  return React.cloneElement(childElement, {
    ...props,
    className: `${children.props.className} ${className} ${classes}`
  })
}

CssTransition.defaultProps = defaultProps
CssTransition.displayName = 'MoguiCssTransition'
export default CssTransition