import PieceImage from "@/assets/Piece.png"
import { motion } from "motion/react"
import { useEffect, useState, type ReactNode } from "react"
import { PiBagFill, PiCode, PiFolderFill, PiGearFill, PiPersonFill } from "react-icons/pi"
import { Link } from "react-scroll"
import styles from "./index.module.scss"

export const Navigation = () => {
  const elements: Omit<NavElementProps, "closeModal">[] = [
    {
      title: "Biography",
      icon: <PiPersonFill />,
      to: "biography",
    },
    {
      title: "Experience",
      icon: <PiBagFill />,
      to: "experience",
    },
    {
      title: "Technologies",
      icon: <PiCode />,
      to: "technologies",
    },
    {
      title: "Libraries",
      icon: <PiGearFill />,
      to: "libraries",
    },
    {
      title: "Projects & Contacts",
      icon: <PiFolderFill />,
      to: "projects",
    },
  ]

  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (mobileOpen && window.innerWidth > 800) {
        setMobileOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    document.body.style.overflowY = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflowY = ""
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileOpen])

  return (
    <nav
      className={styles.navbar}
      style={{
        height: mobileOpen ? "100vh" : undefined,
      }}
    >
      <motion.button
        initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
        whileHover={{
          filter: ["drop-shadow(0 0 10px rgba(255,255,255))"],
        }}
        className={styles.button}
        onClick={() => setMobileOpen(state => !state)}
      >
        <div
          className={styles.top}
          style={{ transform: mobileOpen ? "rotate(-45deg) translate(0, 11px)" : "rotate(0) translate(0)" }}
        />
        <div className={styles.middle} style={{ display: mobileOpen ? "none" : "block" }} />
        <div
          className={styles.bottom}
          style={{ transform: mobileOpen ? "rotate(45deg) translate(0, -11px)" : "rotate(0) translate(0)" }}
        />
      </motion.button>
      {elements.map(el => (
        <NavElement {...el} key={el.title} closeModal={() => setMobileOpen(false)} />
      ))}
    </nav>
  )
}

type NavElementProps = {
  title: string
  icon: ReactNode
  to: string
  closeModal: () => void
}

const NavElement = ({ title, icon, to, closeModal }: NavElementProps) => {
  return (
    <motion.div
      initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
      whileHover={{
        filter: ["drop-shadow(0 0 10px rgba(255,255,255))"],
      }}
    >
      <Link onClick={closeModal} to={to} smooth={true} duration={500} className={styles.piece} offset={-70}>
        <img src={PieceImage} className={styles.pieceImage} alt={title} />
        <div className={styles.pieceText}>
          {icon}
          {title}
        </div>
      </Link>
    </motion.div>
  )
}
