import React from "react"

import styles from "./Hours.module.scss"
import { Section } from "./Section"

interface NoticeProps {
  body: string
}

export const Notice: React.FC<NoticeProps> = ({ body }: NoticeProps) => {
  return (
    <Section id="notice">
      <div className={styles.section}>
        <span className={styles.title}>{body}</span>
      </div>
    </Section>
  )
}
