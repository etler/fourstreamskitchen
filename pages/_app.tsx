import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=375, initial-scale=1.0, maximum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
