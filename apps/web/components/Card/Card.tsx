interface CardProps {
  bgColor?: string 
  color?: string 
  padding?: string 
  margin?: string 
  children?: React.ReactNode
}

const Card = ({
  bgColor = 'transparent',
  color = '#FFFFFF',
  padding = '6px',
  margin = '8px',
  children,
  ...props
}: CardProps) => {
  return (
    <div 
      style={{
        color: color,
        backgroundColor: bgColor,
        padding: padding,
        margin: margin
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card