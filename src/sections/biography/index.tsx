import { BioPaper, BioSection, Header } from "@/components"
import styles from "./index.module.scss"
import Portrait from "@/assets/Portrait.png"
import { biographyData } from "@/data"

export const Biography = () => {
  const data = biographyData
  return (
    <section className={styles.section}>
      <Header>Biography</Header>
      <div className={styles.content}>
        <img alt="my-photo" src={Portrait} className={styles.portraitImage} />
        <BioPaper>
          {data.map(item => (
            <BioSection key={item.name} items={item.items} />
          ))}
        </BioPaper>
      </div>
    </section>
  )
}
