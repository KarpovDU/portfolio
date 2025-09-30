import { ImSpinner2 } from "react-icons/im"
import styles from "./index.module.scss"
import { useEffect, useState, type ReactNode } from "react"
import FontFaceObserver from "fontfaceobserver"

export const Spinner = () => {
  return (
    <div className={styles.background}>
      <ImSpinner2 className={styles.spinner} />
    </div>
  )
}

export const Preloader = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let imagesLoaded = 0
    let fontsLoaded = false

    const images = Array.from(document.images)
    const checkImages = () => {
      imagesLoaded++
      if (imagesLoaded === images.length && fontsLoaded) {
        setLoading(false)
      }
    }

    images.forEach(img => {
      if (img.complete) checkImages()
      else img.addEventListener("load", checkImages)
    })

    const font = new FontFaceObserver("PatrickHand")
    font.load().then(() => {
      fontsLoaded = true
      if (imagesLoaded === images.length) setLoading(false)
    })

    return () => {
      images.forEach(img => img.removeEventListener("load", checkImages))
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return <>{children}</>
}
