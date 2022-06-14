import React from "react"

import styles from "./Section.module.scss"

export interface SectionProps {
  id: string
  children: JSX.Element
}

export const Section: React.FC<SectionProps> = ({ id, children }: SectionProps) => {
  return (
    <div className={styles.section} id={id}>
      {children}
    </div>
  )
}
