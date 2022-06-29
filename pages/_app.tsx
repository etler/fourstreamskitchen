import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"

import { GoogleAnalytics, usePageViews, event } from "nextjs-google-analytics"

import "../styles/globals.scss"

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

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
