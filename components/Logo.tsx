import React from "react"

import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src="/logo-emblem-small-white.png" alt="四川坊" />
      <img className={styles.logo} src="/logo-white.png" alt="Four Streams Kitchen" />
    </div>
  )
}
