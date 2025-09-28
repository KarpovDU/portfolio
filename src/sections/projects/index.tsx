import TabletImage from "@/assets/Tablet.png"
import { Application, Header } from "@/components"
import { contactsData, projectsData } from "@/data"
import { motion } from "motion/react"
import styles from "./index.module.scss"

export const Projects = () => {
  const projects = projectsData
  const contacts = contactsData

  return (
    <section className={styles.section}>
      <Header>Projects</Header>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ delay: 0.2 }}
        className={styles.container}
      >
        <img src={TabletImage} alt="tablet" className={styles.tablet} />
        <div className={styles.apps}>
          <div className={styles.projects}>
            {projects.map(project => (
              <Application key={project.value} href={project.href} value={project.value} image={project.image} />
            ))}
          </div>
          <div className={styles.contacts}>
            {contacts.map(contact => (
              <Application key={contact.value} href={contact.href} value={contact.value} image={contact.image} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
