import React from "react"
import { Header } from "./Header"
import { Location } from "./Location"
import { Menu } from "./Menu"
import { Hero } from "./Hero"

import styles from "./Main.module.scss"
import { Hours } from "./Hours"

export interface mainProps {}

export const Main: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Hours />
        <Menu />
        <Location />
      </main>
    </>
  )
}
