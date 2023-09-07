interface Props {
  visible: boolean
  className: string
  name: string
}

export const defaultProps = {
  visible: false,
  className: '',
  name: 'transition'
}

export type CssTransitionProps = Props
