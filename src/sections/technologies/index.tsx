import NextBook from "@/assets/Next.png"
import ReactNativeBook from "@/assets/React native.png"
import ReactBook from "@/assets/React.png"
import { Header } from "@/components"
import styles from "./index.module.scss"

type Book = {
  href: string
  src: string
  alt: string
  className: string
}

const books: Book[] = [
  {
    href: "https://react.dev/",
    src: ReactBook,
    alt: "react-book",
    className: styles.react,
  },
  {
    href: "https://nextjs.org/",
    src: NextBook,
    alt: "next-book",
    className: styles.next,
  },
  {
    href: "https://reactnative.dev/",
    src: ReactNativeBook,
    alt: "react-native-book",
    className: styles.reactNative,
  },
]

export const Technologies = () => {
  return (
    <section className={styles.container}>
      <Header>Main technologies</Header>
      <div className={styles.books}>
        {books.map(book => (
          <a key={book.alt} href={book.href} target="_blank" rel="noopener noreferrer">
            <img alt={book.alt} src={book.src} className={book.className} />
          </a>
        ))}
      </div>
    </section>
  )
}
