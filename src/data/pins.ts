import Apollo from "@/assets/Pins/Code/Apollo.svg"
import GraphQL from "@/assets/Pins/Code/GraphQL.svg"
import HTML from "@/assets/Pins/Code/HTML.svg"
import JS from "@/assets/Pins/Code/JavaScript.svg"
import Jest from "@/assets/Pins/Code/Jest.svg"
import Node from "@/assets/Pins/Code/Node.svg"
import Redux from "@/assets/Pins/Code/Redux.svg"
import RTL from "@/assets/Pins/Code/RTL.svg"
import TS from "@/assets/Pins/Code/TypeScript.svg"
import Vite from "@/assets/Pins/Code/Vite.svg"
import Webpack from "@/assets/Pins/Code/Webpack.svg"

import CSS from "@/assets/Pins/style/CSS.svg"
import SASS from "@/assets/Pins/style/SASS.svg"
import Figma from "@/assets/Pins/style/Figma.svg"
import MUI from "@/assets/Pins/style/MUI.svg"
import Tailwind from "@/assets/Pins/style/Tailwind.svg"

import Bash from "@/assets/Pins/utils/Bash.svg"
import Docker from "@/assets/Pins/utils/Docker.svg"
import ESLint from "@/assets/Pins/utils/ESLint.svg"
import GitHub from "@/assets/Pins/utils/GitHub.svg"
import Prettier from "@/assets/Pins/utils/Prettier.svg"
import VS from "@/assets/Pins/utils/VS.svg"

type Pin = {
  name: string
  image: string
  href: string
}

type PinsGroup = {
  name: string
  pins: Pin[]
}

export const pinsData: PinsGroup[] = [
  {
    name: "code",
    pins: [
      {
        name: "graphql",
        image: GraphQL,
        href: "https://graphql.org/",
      },
      {
        name: "html",
        image: HTML,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "javascript",
        image: JS,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "jest",
        image: Jest,
        href: "https://jestjs.io/",
      },
      {
        name: "node",
        image: Node,
        href: "https://nodejs.org/",
      },
      {
        name: "apollo",
        image: Apollo,
        href: "https://www.apollographql.com/",
      },
      {
        name: "redux",
        image: Redux,
        href: "https://redux.js.org/",
      },
      {
        name: "rtl",
        image: RTL,
        href: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        name: "typescript",
        image: TS,
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "vite",
        image: Vite,
        href: "https://vite.dev/",
      },
      {
        name: "webpack",
        image: Webpack,
        href: "https://webpack.js.org/",
      },
    ],
  },
  {
    name: "style",
    pins: [
      {
        name: "css",
        image: CSS,
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started",
      },
      {
        name: "sass",
        image: SASS,
        href: "https://sass-lang.com/",
      },
      {
        name: "figma",
        image: Figma,
        href: "https://www.figma.com",
      },
      {
        name: "mui",
        image: MUI,
        href: "https://mui.com/",
      },
      {
        name: "tailwind",
        image: Tailwind,
        href: "https://tailwindcss.com/",
      },
    ],
  },
  {
    name: "utils",
    pins: [
      {
        name: "bash",
        image: Bash,
        href: "https://www.gnu.org/software/bash/",
      },
      {
        name: "docker",
        image: Docker,
        href: "https://www.docker.com/",
      },
      {
        name: "eslint",
        image: ESLint,
        href: "https://eslint.org/",
      },
      {
        name: "github",
        image: GitHub,
        href: "https://github.com/",
      },
      {
        name: "prettier",
        image: Prettier,
        href: "https://prettier.io/",
      },
      {
        name: "vscode",
        image: VS,
        href: "https://code.visualstudio.com/",
      },
    ],
  },
]
