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
          <Text h1>Mogui!</Text>
          Please Enjoy
        </div>
      </div>
    </>
  )
}
