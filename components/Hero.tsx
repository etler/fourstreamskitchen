import React from "react"
import ExportedImage from "next-image-export-optimizer"

import styles from "./Hero.module.scss"

export const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <ExportedImage
        src="/hero.jpg"
        width={2048}
        height={2048}
        layout="raw"
        className={[styles.heroImage, styles.heroImage_desktop].join(" ")}
      />
      <ExportedImage
        src="/hero-mobile.jpg"
        width={2048}
        height={2048}
        layout="raw"
        className={[styles.heroImage, styles.heroImage_mobile].join(" ")}
      />
    </div>
  )
}
