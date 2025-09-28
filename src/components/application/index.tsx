import styles from "./index.module.scss"

export type ApplicationProps = {
  image: string
  href: string
  value: string
}

export const Application = ({ href, image, value }: ApplicationProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.container}>
      <img src={image} alt={value} className={styles.image} />
      <div>{value}</div>
    </a>
  )
}
