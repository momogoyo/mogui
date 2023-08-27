import Head from 'next/head'
// import { Page, Display, Text } from '@mogui/core'
import { Text, Tooltip } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>mogui</title>
        <meta name="description" content="momogoyo's UI" />
      </Head>
      <div>
        <div>
          <Text h2>
            이건 모모고요의 
            첫 <Text span type="success">MUI</Text>야!
          </Text>
          <Text b type="error" font="1.4">"Mogui"</Text>
          <Text p type="warning" font="1.1">마니마니 써죠</Text>
          <Tooltip font="1.4" padding="12px" type="warning" trigger={'hover'} text={'123123123'}>Tooltip</Tooltip>
        </div>
      </div>
    </>
  )
}
