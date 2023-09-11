'use client'

import { useEffect, useState } from 'react'
import { Tooltip } from '@momogoyo/mogui'
import Card from '@/components/Card'

const Page = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <Card>
          <Tooltip text={'Mogui Tooltip'} />
        </Card>
      )}
    </>
  )
}

export default Page