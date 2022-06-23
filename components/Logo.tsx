import React from "react"
import ExportedImage from "next-image-export-optimizer"

import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <ExportedImage
        className={styles.logo}
        width={200}
        height={200}
        layout="raw"
        src="/logo-emblem-small-white.png"
        alt="四川坊"
      />
      <ExportedImage
        className={styles.logo}
        width={500}
        height={200}
        layout="raw"
        src="/logo-white.png"
        alt="Four Streams Kitchen"
      />
    </div>
  )
}
