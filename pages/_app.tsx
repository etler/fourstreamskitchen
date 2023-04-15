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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aptos",
    addressRegion: "CA",
    postalCode: "95003",
    streetAddress: "7960 Soquel Dr",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.976259087001594,
    longitude: -121.9053810078489,
  },
  name: "Four Streams Kitchen",
  priceRange: "$",
  servesCuisine: "Chinese",
  telephone: "(831) 685-2121",
  url: "https://www.fourstreamskitchen.com/",
  menu: "https://www.fourstreamskitchen.com/#menu",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:30",
      closes: "21:30",
    },
  ],
  acceptsReservations: "True",
}

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews()

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="width=375, initial-scale=1.0, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
