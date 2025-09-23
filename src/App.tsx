import styles from "./app.module.scss"
import { Biography, Technologies } from "./sections"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Biography />
        <Technologies />
      </div>
    </div>
  )
}
