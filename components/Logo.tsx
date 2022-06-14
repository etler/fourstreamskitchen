import React from "react"

import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return <img className={styles.logo} src="/logo-white.png" alt="Four Streams Kitchen" />
}
