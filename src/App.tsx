import { Biography } from "./sections"
import styles from "./app.module.scss"

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Biography />
      </div>
    </div>
  )
}
