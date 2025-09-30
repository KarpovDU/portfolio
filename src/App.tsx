import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import { Navigation, Spinner } from "./components"
import { Biography, Footer, Libraries, Projects, Technologies, Work } from "./sections"

export const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }
    if (document.readyState === "complete") {
      setLoading(false)
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (loading) return <Spinner />

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
