'use client'

import { useEffect, useState } from 'react'
import { Tooltip } from '@momogoyo/mogui'
import Card from '@/components/Card'

const Page = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const changeHandler = (state: boolean) => {
    setVisible(state)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <Card>
          <Tooltip
            type={'violet'}
            text={'Mogui Tooltip'}
            initialVisible={true}
            visible={visible}
            onVisibleChange={changeHandler}
            trigger={'click'}
          >
            <span>Tooltip</span>
          </Tooltip>
        </Card>
      )}
    </>
  )
}

export default Page