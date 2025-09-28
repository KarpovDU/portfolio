import styles from "./app.module.scss"
import { Biography, Libraries, Technologies, Projects, Footer } from "./sections"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Biography />
        <Technologies />
        <Libraries />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
