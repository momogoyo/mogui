type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({
  children
}: RootLayoutProps) => (
  <html lang="ko">
    <head>
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout