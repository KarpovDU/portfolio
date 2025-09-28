import HeaderImage from "@/assets/Header.png"
import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react"
import styles from "./index.module.scss"

type HeaderProps = {
  children: string
}

export const Header = ({ children }: HeaderProps) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { amount: "some", once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 })
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} initial={{ scale: 1.5, opacity: 0 }} animate={controls} className={styles.container}>
      <img alt="header-image" className={styles.headerImage} src={HeaderImage} />
      <h1>{children}</h1>
    </motion.div>
  )
}
