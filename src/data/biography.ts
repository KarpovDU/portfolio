import { type BioRowProps } from "@/components/bio-paper"
type BiographyData = {
  name: string
  items: BioRowProps[]
}
export const biographyData: BiographyData[] = [
  {
    name: "main",
    items: [
      {
        title: "Name",
        description: "Dmitry",
      },
      {
        title: "Surname",
        description: "Karpov",
      },
      {
        title: "Birth date",
        description: "20 November 2001 (23 y.o)",
      },
    ],
  },
  {
    name: "intenational",
    items: [
      {
        title: "Country",
        description: "Russia",
      },
      {
        title: "City",
        description: "Perm",
      },
      {
        title: "Languages",
        description: "Russian, English",
      },
    ],
  },
  {
    name: "prof",
    items: [
      {
        title: "Profession",
        description: "Frontend Developer",
      },
      {
        title: "Grade",
        description: "Junior",
      },
    ],
  },
  {
    name: "desc",
    items: [
      {
        title: "Description",
        description:
          "Hello everyone! I'm looking to become a pro in my field of development. Passionate about our work and always ready to learn something new, never stopping. I'd love to chat with you :) ",
      },
    ],
  },
]
