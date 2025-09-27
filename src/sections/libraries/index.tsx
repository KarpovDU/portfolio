import { Header } from "@/components"
import BackpackImage from "@/assets/Backpack.png"
import styles from "./index.module.scss"
import { pinsData } from "@/data"

export const Libraries = () => {
  const data = pinsData

  return (
    <section className={styles.section}>
      <Header>Libraries & Utils</Header>
      <div className={styles.container}>
        <img alt="backpack" src={BackpackImage} className={styles.backpack} />
        {data.map(pinsGroup => (
          <div key={pinsGroup.name} className={styles[pinsGroup.name]}>
            {pinsGroup.pins.map(pin => (
              <a href={pin.href} target="_blank" rel="noopener noreferrer" key={pin.name}>
                <img src={pin.image} alt={pin.name} className={styles.pin} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
