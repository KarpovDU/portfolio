import styles from "./app.module.scss"
import { Navigation } from "./components"
import { Biography, Footer, Libraries, Projects, Technologies, Work } from "./sections"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Navigation />
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
