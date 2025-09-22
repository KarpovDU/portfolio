import HeaderImage from "@/assets/Header.png"
import styles from "./index.module.scss"

type HeaderProps = {
  children: string
  width?: number
}

export const Header = ({ children, width = 600 }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <img alt="header-image" width={width} src={HeaderImage} />
      <h1>{children}</h1>
    </div>
  )
}
