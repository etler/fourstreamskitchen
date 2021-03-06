import { useEffect, useRef, useState } from "react"
import ExportedImage from "next-image-export-optimizer"

import styles from "./Gallery.module.scss"

import LeftCaretIcon from "../public/icons/left-caret.svg"
import RightCaretIcon from "../public/icons/right-caret.svg"
import { event } from "nextjs-google-analytics"

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
      if (
        bounds.left >= listBounds.left - bounds.width / 2 &&
        bounds.right <= listBounds.right + bounds.width / 2
      ) {
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
    const firstVisibleChild = visibleChildren[0]
    const target = firstVisibleChild?.previousElementSibling ?? firstVisibleChild
    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }
  const next = () => {
    const visibleChildren = getVisibleChildren(listRef.current)
    const lastVisibleChild = visibleChildren[visibleChildren.length - 1]
    const target = lastVisibleChild?.nextElementSibling ?? lastVisibleChild
    target?.scrollIntoView({
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
          onClick={() => {
            event("Clicked Gallery Previous Button")
            prev()
          }}
        >
          <LeftCaretIcon />
        </div>
        <div
          className={[styles.nav, styles.nav_right, showRightNav ? "" : styles.nav_hide].join(" ")}
          onClick={() => {
            event("Clicked Gallery Next Button")
            next()
          }}
        >
          <RightCaretIcon />
        </div>
        <div className={styles.list} ref={listRef}>
          {images.map((image, index) => {
            return (
              <div
                key={image}
                className={styles.imageContainer}
                onClick={() => event("Clicked Gallery Image", { value: index })}
              >
                <ExportedImage
                  src={`/gallery/${image}`}
                  alt="Food"
                  loading="lazy"
                  className={styles.image}
                  layout="raw"
                  width={600}
                  height={400}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
