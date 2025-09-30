import Yenisei from "@/assets/Yenisei.png"

type Experience = {
  logo: string
  name: string
  text: string[]
}

export const experienceData: Experience[] = [
  {
    logo: Yenisei,
    name: "AVS-Dorstroi",
    text: [
      "Frontend Developer (Next.JS / React Native)",
      "From November 2024 to September 2025 (11 month)",
      " ",
      "Website development using Next.JS and SCSS",
      "Mobile application development with React Native",
      "CI/CD configuration and setup",
      "Implemented GraphQL API integration",
      "Working with version control systems Git and GitHub.",
      "Developed new features and enhanced existing ones",
      "Writing and maintaining unit tests (Jest / RTL)",
    ],
  },
]
