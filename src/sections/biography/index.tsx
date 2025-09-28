import Portrait from "@/assets/Portrait.png"
import { BioPaper, BioSection, Header } from "@/components"
import { biographyData } from "@/data"
import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react"
import styles from "./index.module.scss"

export const Biography = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { amount: "some", once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 })
    }
  }, [isInView, controls])

  const data = biographyData
  return (
    <section className={styles.section}>
      <Header>Biography</Header>
      <div className={styles.content}>
        <motion.img
          ref={ref}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.2 }}
          alt="my-photo"
          src={Portrait}
          className={styles.portraitImage}
        />
        <BioPaper>
          {data.map(item => (
            <BioSection key={item.name} items={item.items} />
          ))}
        </BioPaper>
      </div>
    </section>
  )
}
