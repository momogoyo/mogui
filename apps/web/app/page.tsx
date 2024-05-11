'use client'

import { useEffect, useState } from 'react'
import { Card, Text } from '@momogoyo/mogui'

const Page = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="mogui">
      {mounted && (
        <div id="moguiCard">
          <Card type={'primary'}>default</Card>
          <Card type={'secondary'}>secondary</Card>
          <Card type={'tertiary'}>tertiary</Card>
          <Card type={'success'}>success</Card>
          <Card type={'warning'}>warning</Card>
          <Card type={'error'}>error</Card>
        </div>
      )}

      <style jsx>{`
        .mogui {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Page