interface CardProps {
  bgColor?: string 
  color?: string 
  children?: React.ReactNode
}

const Card = ({
  bgColor = 'transparent',
  color = '#FFFFFF',
  children,
  ...props
}: CardProps) => {
  return (
    <div 
      style={{
        color: color,
        backgroundColor: bgColor,
        padding: '6px',
        margin: '8px'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card