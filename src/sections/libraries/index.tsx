import BackpackImage from "@/assets/Backpack.png"
import { Header } from "@/components"
import { pinsData } from "@/data"
import { motion } from "motion/react"
import styles from "./index.module.scss"

export const Libraries = () => {
  const data = pinsData

  return (
    <section className={styles.section}>
      <Header>Libraries & Utils</Header>
      <div className={styles.container}>
        <motion.img
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          alt="backpack"
          src={BackpackImage}
          className={styles.backpack}
        />
        {data.map((pinsGroup, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: Number(`0.${index + 5}`) }}
            key={pinsGroup.name}
            className={styles[pinsGroup.name]}
          >
            {pinsGroup.pins.map(pin => (
              <motion.a
                initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
                whileHover={{
                  filter: ["drop-shadow(0 0 10px rgba(255,255,255))"],
                }}
                href={pin.href}
                target="_blank"
                rel="noopener noreferrer"
                key={pin.name}
              >
                <img src={pin.image} alt={pin.name} className={styles.pin} />
              </motion.a>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
