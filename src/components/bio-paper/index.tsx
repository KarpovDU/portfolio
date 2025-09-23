import type { ReactNode } from "react"
import styles from "./index.module.scss"
import PaperImage from "@/assets/Paper.png"

export type BioRowProps = {
  title: string
  description: string
}

export type BioSectionProps = {
  items: BioRowProps[]
}

export const BioPaper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.paper}>
      <div className={styles.text}>{children}</div>
      <img alt="paper" src={PaperImage} className={styles.paperImage} />
      <div className={styles.signature}>@KarpovDU</div>
    </div>
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
      <span className={styles.title}>{title}: </span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}
