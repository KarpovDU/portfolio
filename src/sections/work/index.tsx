import { Header } from "@/components"
import styles from "./index.module.scss"
import PenTabletImage from "@/assets/PenTablet.png"
import { experienceData } from "@/data"
import { motion } from "motion/react"

export const Work = () => {
  const data = experienceData
  return (
    <section id="experience" className={styles.section}>
      <Header>Experience</Header>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.container}>
          <img src={PenTabletImage} className={styles.image} alt="pen-tablet" />
          {data.map(work => (
            <div key={work.name} className={styles.text}>
              <div className={styles.header}>
                <img className={styles.logo} src={work.logo} alt={work.name} />
                <div className={styles.title}>{work.name}</div>
              </div>
              <div className={styles.body}>
                {work.text.map((row, index) => (
                  <div key={index}>{row}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
