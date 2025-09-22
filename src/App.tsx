import styles from "./app.module.scss"
import { Biography } from "./sections"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Biography />
      </div>
    </div>
  )
}
