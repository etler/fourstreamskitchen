import Image from "next/image"
import React from "react"

import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo-white.png" width={400} height={50} />
    </div>
  )
}
