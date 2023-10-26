'use client'

import { useEffect, useState } from 'react'
import { Tooltip, Popover, Card, Image } from '@momogoyo/mogui'
import { CardComponent } from '../components/Card'
import DockBar from '@/components/DockBar'

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
        <div>
          <DockBar />
          <CardComponent bgColor={'violet'}>
            <Tooltip
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
              type={'neutral'}
              text={'Mogui Tooltip2'}
              initialVisible={true}
              trigger={'click'}
              placement={'right'}
            >
              <span>Tooltip2</span>
            </Tooltip>
          </CardComponent>
          <Card shadow={true}>
            <p>Card</p>
          </Card>
          <CardComponent color={'#FFF'} padding={'0px'}>
            <Image
              className="metheduxk"
              src={'./art_duck.jpeg'}
              width={'100px'}
              height={'100px'}
            />
          </CardComponent>
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