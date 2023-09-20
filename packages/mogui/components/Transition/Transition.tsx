"use client"

import React, { useEffect, useState } from 'react'

import type { TransitionProps } from './types'

const Transition = ({
  visible = false,
  className = '',
  name = 'transition',
  children,
  ...props
}: React.PropsWithChildren<TransitionProps>) => {
  const [classes, setClasses] = useState<string>('')
  const [renderable, setRenderable] = useState<boolean>(visible)

  useEffect(() => {
    const statusClassName = visible ? 'enter' : 'leave'

    if (visible && !renderable) {
      setRenderable(true)
    }

    setClasses(`${name}-${statusClassName}`)

    if (!visible && renderable) {
      setClasses('')
      setRenderable(false)
    }
  }, [visible, renderable])

  if (!React.isValidElement(children) || !renderable) return null
  const childrenElement = children as React.ReactElement

  return React.cloneElement(childrenElement, {
    ...props,
    className: `${childrenElement.props.className} ${className} ${classes}`
  })
}

Transition.displayName = 'MoguiTransition'

export default Transition