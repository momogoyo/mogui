import { useMemo } from 'react'
import { getStyles } from './styles'
import useClasses from '../../hooks/useClasses'
import useTheme from '../../hooks/useTheme'
import useScale, { provideScale } from '../../hooks/useScale'

import type { CardProps } from './types'

const CardComponent = ({
  hoverable = false,
  shadow = false,
  type = 'default',
  className = '',
  children,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  const classes = useClasses('card', className)
  const { SCALES } = useScale()
  const theme = useTheme()

  const { color, bgColor, borderColor } = useMemo(() => getStyles(type, theme.palette, shadow), [])
  const hoverShadow = useMemo(() => {
    if (shadow) return theme.expressiveness.shadowMedium
    return hoverable ? theme.expressiveness.shadowSmall : 'none'
  }, [shadow, hoverable])

  return (
    <div
      className={classes}
      {...props}
    >
      {children}

      <style jsx>{`
        .card {
          background: ${theme.palette.background};
          background-color: ${bgColor};
          color: ${color};
          border 1px solid ${borderColor};
          box-shadow: ${shadow ? theme.expressiveness.shadowSmall : 'none'};
          transition: all 0.25s ease;
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        .card:hover {
          box-shadow: ${hoverShadow};
        }
      `}</style>
    </div>
  )
}

CardComponent.displayName = 'MoguiCard'
const Card: React.FC<React.PropsWithChildren<CardProps>> = provideScale(CardComponent)

export default Card