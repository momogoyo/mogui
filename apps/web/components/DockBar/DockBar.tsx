import styled from 'styled-components'
import './style.css'
import { Popover } from '@momogoyo/mogui'

const DockBar = () => {
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

  return (
    <Dock>
      <DockContainer>
        <Popover 
          content={content as any}
          disableItemsAutoClose={true}
          placement={'top'}
          portalClassName={'popover-momogoyo'}
          >
          <Button>
            <Name>Finder</Name>
            <Icon></Icon>
          </Button>
        </Popover>
        <Button>
          <Name></Name>
          <Icon></Icon>
        </Button>
        <Button>
          <Name></Name>
          <Icon></Icon>
        </Button>
        <Button>
          <Name></Name>
          <Icon></Icon>
        </Button>
        <Button>
          <Name></Name>
          <Icon></Icon>
        </Button>
        <Button>
          <Name></Name>
          <Icon></Icon>
        </Button>
      </DockContainer>
    </Dock>
  )
}

const Dock = styled.div`
  width: auto;
  height: 60px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
`

const DockContainer = styled.div`
  padding: 3px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: rgba(83, 83, 83, 0.25);
  backdrop-filter: blur(13px);
  --webkit-backdrop-filter: blur(13px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  padding: 0 10px;
`

const Name = styled.div``

const Icon = styled.i``

export default DockBar