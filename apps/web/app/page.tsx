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
    <div className="mogui">
      {mounted && (
        <Card>
          <Tooltip
            type={'violet'}
            text={'Mogui Tooltip'}
            initialVisible={true}
            visible={visible}
            onVisibleChange={changeHandler}
            trigger={'click'}
            placement={'rightStart'}
          >
            <span>Tooltip</span>
          </Tooltip>
        </Card>
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