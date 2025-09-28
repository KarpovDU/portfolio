import Github from "@/assets/Contacts/Github.png"
import Telegram from "@/assets/Contacts/Telegram.png"
import VK from "@/assets/Contacts/VK.png"
import type { ApplicationProps } from "@/components"
import Gmail from "@/assets/Contacts/Gmail.png"

export const contactsData: ApplicationProps[] = [
  {
    href: "https://t.me/karpovdu",
    image: Telegram,
    value: "Telegram",
  },
  {
    href: "https://vk.com/yoshi_city",
    image: VK,
    value: "VKontakte",
  },
  {
    href: "https://github.com/KarpovDU",
    image: Github,
    value: "GitHub",
  },
  {
    href: "mailto:karpovdu.01@gmail.com",
    image: Gmail,
    value: "Gmail",
  },
]
