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
          This is My First Material UI,
          {/* @ts-ignore */}
          <Text p type="success" pl="5" mr="2" font="1.2" width="10" height="4">Mogui!</Text>
          Please Enjoy
        </div>
      </div>
    </>
  )
}
