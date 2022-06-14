import React from "react"

import styles from "./Location.module.scss"
import { Section } from "./Section"

export const Location: React.FC = () => {
  return (
    <Section id="location">
      <iframe className={styles.location} src="/maps.html"></iframe>
    </Section>
  )
}
