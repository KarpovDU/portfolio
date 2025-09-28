import NextBook from "@/assets/Next.png"
import ReactNativeBook from "@/assets/React native.png"
import ReactBook from "@/assets/React.png"
import { Header } from "@/components"
import { motion } from "motion/react"
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
    <section className={styles.section}>
      <Header>Main technologies</Header>
      <div className={styles.books}>
        {books.map((book, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: Number(`0.${index + 3}`) }}
            className={styles.container}
            key={book.alt}
            href={book.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
              whileHover={{
                filter: ["drop-shadow(0 0 10px rgba(255,255,255))"],
              }}
              alt={book.alt}
              src={book.src}
              className={book.className}
            />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
