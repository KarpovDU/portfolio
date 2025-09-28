import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import { Biography, Libraries, Technologies, Projects, Footer } from "./sections"

export const App = () => {
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
  }, [])

  if (!didMount) return <div>Loading</div>
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
