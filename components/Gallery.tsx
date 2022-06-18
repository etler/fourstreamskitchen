import { useEffect, useRef, useState } from "react"
import styles from "./Gallery.module.scss"

import LeftCaretIcon from "../public/icons/left-caret.svg"
import RightCaretIcon from "../public/icons/right-caret.svg"

const images = [
  "LDS02238.jpg",
  "LDS02248.jpg",
  "LDS02262.jpg",
  "LDS02270.jpg",
  "LDS02281.jpg",
  "LDS02285.jpg",
  "LDS02299.jpg",
  "LDS02304.jpg",
  "LDS02310.jpg",
  "LDS02312.jpg",
  "LDS02330.jpg",
  "LDS02357.jpg",
  "LDS02367.jpg",
]

const getVisibleChildren = (list: HTMLElement | null) => {
  if (list == null) {
    return []
  }
  const listBounds = list.getBoundingClientRect()
  return [...list.childNodes].flatMap((item) => {
    if (item instanceof HTMLElement) {
      const bounds = item.getBoundingClientRect()
      if (bounds.left >= listBounds.left - 10 && bounds.right <= listBounds.right + 10) {
        return item
      }
    }
    return []
  })
}

export const Gallery: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null)
  const [showLeftNav, setShowLeftNav] = useState<boolean>(false)
  const [showRightNav, setShowRightNav] = useState<boolean>(true)
  useEffect(() => {
    const list = listRef.current
    if (list == null) {
      return
    }
    const onScroll = () => {
      setShowLeftNav(list.scrollLeft > 10)
      setShowRightNav(list.scrollLeft + list.clientWidth < list.scrollWidth - 10)
    }
    list.addEventListener("scroll", onScroll)
    return () => list.removeEventListener("scroll", onScroll)
  }, [listRef])
  const prev = () => {
    const visibleChildren = getVisibleChildren(listRef.current)
    visibleChildren[0]?.previousElementSibling?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }
  const next = () => {
    const visibleChildren = getVisibleChildren(listRef.current)
    visibleChildren[visibleChildren.length - 1]?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }
  return (
    <div className={styles.section}>
      <div className={styles.carousel}>
        <div
          className={[styles.nav, styles.nav_left, showLeftNav ? "" : styles.nav_hide].join(" ")}
          onClick={prev}
        >
          <LeftCaretIcon />
        </div>
        <div
          className={[styles.nav, styles.nav_right, showRightNav ? "" : styles.nav_hide].join(" ")}
          onClick={next}
        >
          <RightCaretIcon />
        </div>
        <div className={styles.list} ref={listRef}>
          {images.map((image) => {
            return (
              <img
                key={image}
                src={`/gallery/${image}`}
                alt="Food"
                loading="lazy"
                className={styles.image}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
