import type { AppProps } from "next/app"
import Head from "next/head"

import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews()

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="width=375, initial-scale=1.0, maximum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
