import Head from 'next/head'
// import { Page, Display, Text } from '@mogui/core'
import { Text } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>mogui</title>
        <meta name="description" content="momogoyo's UI" />
      </Head>
      <div>
        <div>
          이건 모모고요의 첫 MUI야!
          {/* @ts-ignore */}
          <Text p type="warning" pl="2" mr="2" font="1.2" width="10" height="2">'Mogui'</Text>
          마니마니 써죠
        </div>
      </div>
    </>
  )
}
