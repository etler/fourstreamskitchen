import React from "react"

import styles from "./About.module.scss"
import { Section } from "./Section"

export const About: React.FC = () => {
  return (
    <Section id="hours">
      <div className={styles.section}>
        <p className={styles.description}>
          We are a Szechuan Chinese restaurant servicing the Aptos Village Square area, emphasizing
          respectfully grown ingredients from local organic farms, and authentic preparations which
          reflect the region of the Szechuan “Four Streams” Basin.
        </p>
        <p className={styles.description}>
          Our dishes express a Szechuan understanding of the universal connection between food and
          wellbeing and our evolving menu will offer brand new taste experiences. Our service will
          make every customer comfortable and we hope to be your favorite neighborhood eating place.
        </p>
      </div>
    </Section>
  )
}
