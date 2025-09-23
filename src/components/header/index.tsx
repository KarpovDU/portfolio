import HeaderImage from "@/assets/Header.png"
import styles from "./index.module.scss"

type HeaderProps = {
  children: string
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <img alt="header-image" className={styles.headerImage} src={HeaderImage} />
      <h1>{children}</h1>
    </div>
  )
}
