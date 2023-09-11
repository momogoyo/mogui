interface CardProps {
  children?: React.ReactNode
}

const Card = ({
  children,
  ...props
}: CardProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default Card