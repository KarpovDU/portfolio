import styles from "./app.module.scss"
import { Navigation, Preloader } from "./components"
import { Biography, Footer, Libraries, Projects, Technologies, Work } from "./sections"

export const App = () => {
  return (
    <Preloader>
      <div className={styles.content}>
        <Navigation />
        <Biography />
        <Work />
        <Technologies />
        <Libraries />
        <Projects />
        <Footer />
      </div>
    </Preloader>
  )
}
