'use client'

import { useEffect, useState } from 'react'
import { Tooltip, Popover } from '@momogoyo/mogui'
import Card from '../components/Card'

const Page = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const changeHandler = (state: boolean) => {
    setVisible(state)
  }

  const content = () => (
    <div style={{ padding: '0 10px' }}>
      Hello
    </div>
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="mogui">
      {mounted && (
        <div>
          <Card bgColor={'violet'}>
            <Tooltip
              type={'violet'}
              text={'Mogui Tooltip'}
              initialVisible={true}
              visible={visible}
              onVisibleChange={changeHandler}
              trigger={'hover'}
              placement={'top'}
            >
              <span>Tooltip</span>
            </Tooltip>
          </Card>
          <Card bgColor={'skyblue'}>
            <Tooltip
              type={'blue'}
              text={'Mogui Tooltip2'}
              initialVisible={true}
              trigger={'click'}
              placement={'right'}
            >
              <span>Tooltip2</span>
            </Tooltip>
          </Card>
          <Card bgColor={'pink'} color={'#FFF'}>
            <Popover content={content}>
              <span>Popover</span>
            </Popover>
          </Card>
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