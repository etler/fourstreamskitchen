import Link from "next/link"
import React, { useEffect, useRef } from "react"
import throttle from "lodash/throttle"

import styles from "./Header.module.scss"
import { Logo } from "./Logo"

import PhoneIcon from "../public/icons/phone.svg"
import PinIcon from "../public/icons/pin.svg"

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const scrollListener: EventListener = throttle(() => {
    headerRef.current?.style.setProperty("--header-scroll-position", `${window.scrollY}`)
  }, 100)
  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  })
  return (
    <>
      <div className={styles.infoBar}>
        <a href="tel:8316852121" className={styles.info}>
          <span className={styles.infoIcon}>
            <PhoneIcon />
          </span>
          <span>(831) 685-2121</span>
        </a>
        <a
          href="https://www.google.com/maps?q=7960+Soquel+Drive,+Aptos,+CA+95003"
          target="_blank"
          className={styles.info}
        >
          <span className={styles.infoIcon}>
            <PinIcon />
          </span>
          <span>7960 Soquel Drive, Aptos, CA 95003</span>
        </a>
      </div>
      <div className={styles.nav} ref={headerRef}>
        <a href="#">
          <Logo />
        </a>
        <div className={styles.linkBar}>
          <Link href="/order">
            <a className={styles.link}>Order Online</a>
          </Link>
          <Link href="#hours">
            <a className={styles.link}>Hours</a>
          </Link>
          <Link href="#menu">
            <a className={styles.link}>Menu</a>
          </Link>
          <Link href="#location">
            <a className={styles.link}>Location</a>
          </Link>
        </div>
      </div>
    </>
  )
}
