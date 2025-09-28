import PaperImage from "@/assets/Paper.png"
import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react"
import styles from "./index.module.scss"

export type BioRowProps = {
  title: string
  description: string
}
export type BioSectionProps = {
  items: BioRowProps[]
}

export const BioPaper = ({ children }: { children: ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(containerRef, { amount: "some", once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1, opacity: 1 })
    }
  }, [isInView, controls])

  const updateLineHeight = () => {
    if (!textRef.current) return
    const height = textRef.current.offsetHeight
    const value = height / 20
    if (value !== 0) {
      textRef.current.style.setProperty("--lh", `${value}px`)
    }
  }

  useLayoutEffect(() => {
    if (!textRef.current) return updateLineHeight()
    const handleResize = () => updateLineHeight()
    window.addEventListener("resize", handleResize)
    const observer = new ResizeObserver(() => updateLineHeight())
    observer.observe(textRef.current)
    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ scale: 1.5, opacity: 0 }}
      animate={controls}
      transition={{ delay: 0.4 }}
      className={styles.paper}
    >
      <div ref={textRef} className={styles.text}>
        {children}
      </div>
      <img alt="paper" src={PaperImage} className={styles.paperImage} />
      <div className={styles.signature}>@KarpovDU</div>
    </motion.div>
  )
}

export const BioSection = ({ items }: BioSectionProps) => {
  return (
    <div className={styles.section}>
      {items.map(item => (
        <BioRow key={item.title} title={item.title} description={item.description} />
      ))}
    </div>
  )
}

const BioRow = ({ title, description }: BioRowProps) => {
  return (
    <div className={title !== "Description" ? styles.row : ""}>
      <span className={styles.title}>{title}: </span> <span className={styles.description}>{description}</span>
    </div>
  )
}
