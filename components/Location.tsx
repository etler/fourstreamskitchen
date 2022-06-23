import React from "react"

import styles from "./Location.module.scss"
import { Section } from "./Section"

export const Location: React.FC = () => {
  return (
    <Section id="location">
      <>
        <div className={styles.section}>
          <span className={styles.title}>Location</span>
          <a
            href="https://www.google.com/maps?q=7960+Soquel+Drive,+Aptos,+CA+95003"
            target="_blank"
            className={styles.info}
          >
            7960 Soquel Drive, Aptos, CA 95003
          </a>
          <span className={styles.title}>Phone</span>
          <a href="tel:8316852121" className={styles.info}>
            (831) 685-2121
          </a>
        </div>
        <iframe className={styles.location} src="/maps.html" loading="lazy"></iframe>
      </>
    </Section>
  )
}
