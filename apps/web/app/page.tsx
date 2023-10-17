'use client'

import { useEffect, useState } from 'react'
import { Tooltip, Popover, Card } from '@momogoyo/mogui'
import { CardComponent } from '../components/Card'

const Page = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const changeHandler = (state: boolean) => {
    setVisible(state)
  }

  const content = () => (
    <>
      <Popover.Item title>
        <span>제목 영역</span>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item disableAutoClose={false}>
        <span>자동 닫힘</span>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item disableAutoClose={true}>
        <span>안 닫힘</span>
      </Popover.Item>
    </>
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="mogui">
      {mounted && (
        <div>
          <CardComponent bgColor={'violet'}>
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
          </CardComponent>
          <CardComponent bgColor={'skyblue'}>
            <Tooltip
              type={'blue'}
              text={'Mogui Tooltip2'}
              initialVisible={true}
              trigger={'click'}
              placement={'right'}
            >
              <span>Tooltip2</span>
            </Tooltip>
          </CardComponent>
          <CardComponent bgColor={'pink'} color={'#FFF'}>
            <Popover 
              content={content}
              type={'yellow'}
              // disableItemsAutoClose={true}
            >
              <span>Popover</span>
            </Popover>
          </CardComponent>
          <Card shadow={true} type={'white'}>
            <p>Card</p>
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