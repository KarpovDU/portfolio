import { motion } from "motion/react"
import styles from "./index.module.scss"

export type ApplicationProps = {
  image: string
  href: string
  value: string
}

export const Application = ({ href, image, value }: ApplicationProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.container}>
      <motion.img
        initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
        whileHover={{
          filter: ["drop-shadow(0 0 10px rgba(255,255,255))"],
        }}
        src={image}
        alt={value}
        className={styles.image}
      />
      <div>{value}</div>
    </a>
  )
}
