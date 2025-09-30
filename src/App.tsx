import styles from "./app.module.scss"
import { Biography, Footer, Libraries, Projects, Technologies, Work } from "./sections"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Biography />
        <Work />
        <Technologies />
        <Libraries />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
