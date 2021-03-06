import type { NextPage } from "next"
import Head from "next/head"
import { Main } from "../components/Main"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Four Streams Kitchen 四川坊 - Aptos, CA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  )
}

export default Home
