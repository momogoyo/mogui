import React from 'react'

export interface EllipsisProps {
  height: string
}

const Ellipsis = ({
  children,
  height
}: React.PropsWithChildren<EllipsisProps>) => {
  return (
    <span>
      {children}

      <style jsx>{`
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: ${height};
          min-width: 0;
        }
      `}</style>
    </span>
  )
}

export default React.memo(Ellipsis)