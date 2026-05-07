import React from "react"

import styles from "./Hours.module.scss"
import { Section } from "./Section"

export const Hours: React.FC = () => {
  return (
    <Section id="hours">
      <div className={styles.section}>
        <span className={styles.title}>Open 7 Days a week</span>
        <span className={styles.hourTitle}>Hours</span>
        <div className={styles.hours}>
          <span className={styles.days}>Sunday - Thursday</span>
          <span className={styles.time}>11:30am - 9:00pm</span>
        </div>
        <div className={styles.hours}>
          <span className={styles.days}>Friday - Saturday</span>
          <span className={styles.time}>11:30am - 9:30pm</span>
        </div>
        <span className={styles.hourTitle}>Lunch Special</span>
        <div className={styles.hours}>
          <span className={styles.days}>Monday - Friday</span>
          <span className={styles.time}>11:30am - 2:30pm</span>
        </div>
      </div>
    </Section>
  )
}
