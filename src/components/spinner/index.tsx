import { ImSpinner2 } from "react-icons/im"
import styles from "./index.module.scss"

export const Spinner = () => {
  return (
    <div className={styles.background}>
      <ImSpinner2 className={styles.spinner} />
    </div>
  )
}
