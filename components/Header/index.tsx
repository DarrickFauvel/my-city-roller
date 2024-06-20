import Image from "next/image"
import BlueDieLeft from "@/assets/images/blue-die-left.webp"
import BlueDieRight from "@/assets/images/blue-die-right.webp"
import WhiteDie from "@/assets/images/white-die.webp"
import { Cormorant } from "next/font/google"

const cormorant = Cormorant({ subsets: ["latin"] })

type HeaderProps = {
  showDiceRolled: (boolean: boolean) => void
}

export default function Header(props: HeaderProps) {
  const { showDiceRolled } = props

  return (
    <header
      className={`fixed top-0 w-full flex items-center justify-between bg-gradient-to-b from-blue-950 to-cyan-400 px-8`}>
      <div className="absolute -bottom-1 right-1 animate-float-side-to-side">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 128 128">
          <path
            fill="#fbfbfc"
            d="M23.45 62.3c.72-.72-1.27-9.29 7.6-15.91s14.92-2.67 15.77-2.96c.84-.28 4.79-17.6 21.4-22.1s33.93 3.94 38.01 18.02c3.73 12.87.84 21.54 1.27 22.1c.42.56 8.45.28 13.09 7.74s2.96 12.11 2.96 12.11l-29.56 9.15h-47.3S5.02 79.47 4.6 77.5c-.42-1.97.53-8.37 7.32-12.25c5.9-3.37 10.26-1.68 11.53-2.95"
          />
          <path
            fill="#92d0e0d3"
            d="M35.16 92.84s-15.78 3.3-26.45-4.96C2.29 82.9 4.63 74.83 4.63 74.83s4.6 4.65 13.89 5.91c9.29 1.27 19.71.84 19.71.84s2.6 4.44 12.39 6.48c12.27 2.55 18.74-3.73 18.74-3.73s3.36 4.02 15.19 4.3c11.83.28 18.46-7.98 19.57-8.17c.56-.09 3.82 2.87 10.28 1.83c6.15-.99 9.39-3.66 9.39-3.66s.89 6.62-5.3 10.7c-4.83 3.18-13.23 3.52-13.23 3.52s-1.28 4.91-7.05 8.48c-5.36 3.33-14.6 4.44-21.44 2.4c-8.59-2.56-10.72-6.47-10.72-6.47s-6.4 3.75-16.4 2.48c-9.45-1.18-14.49-6.9-14.49-6.9"
          />
        </svg>
      </div>
      <div className="absolute top-0 left-0  animate-float-side-to-side">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 128 128">
          <path
            fill="#fbfbfc"
            d="M109.65 53.48h-.01c0-.07.01-.14.01-.21c0-9.55-7.74-17.3-17.3-17.3c-1.23 0-2.43.13-3.58.38c-3.43-8.34-11.62-14.22-21.2-14.22c-7.19 0-13.6 3.32-17.8 8.5a19.882 19.882 0 0 0-9-2.16c-10.35 0-18.85 7.88-19.84 17.97C9.68 47.04.65 56.26.5 67.71C.34 79.63 9.89 89.43 21.81 89.58c.93.01 1.83-.05 2.73-.16c4.61 9.72 14.5 16.44 25.97 16.44c6.92 0 13.26-2.45 18.22-6.52c3.79 2.81 8.47 4.49 13.55 4.49c10.42 0 19.19-6.99 21.92-16.54c1.72.57 3.55.89 5.46.89c9.58 0 17.35-7.77 17.35-17.35c-.01-9.58-7.77-17.35-17.36-17.35"
          />
          <path
            fill="#92d0e0d3"
            d="M119.85 56.79c3.93 3.97 1.15 13.07-1.55 16.04c-5.32 5.83-15.08 4.47-19 3.63c-1.06-.23-1.23-.15-1.58.06c-.31.19-.45.49-.79 1.2c-1.26 2.72-4.52 7.99-11.4 10.11c-7.17 2.21-13.93-1.16-17.09-3.17c-1.2-.76-1.25-.78-1.79-.77c-.55.01-1.09.41-1.74.92c-2.86 2.25-9.39 6.22-19.46 5.64c-9.87-.57-15.52-6.65-17.46-9.78c-.37-.6-.77-1.1-1.23-1.15c-.53-.05-1.12.49-1.56.93C21 84.54 7.78 85.77 3.4 78.8c4.46 7.15 11.35 10.69 18.42 10.78c.93.01 1.83-.05 2.73-.16c4.61 9.72 14.5 16.44 25.97 16.44c6.92 0 13.26-2.45 18.22-6.52c3.79 2.81 8.47 4.49 13.55 4.49c10.42 0 19.19-6.99 21.92-16.54c1.72.57 3.55.89 5.46.89c9.58 0 17.35-7.77 17.35-17.35c-.02-5.1-2.58-10.86-7.17-14.04"
          />
        </svg>
      </div>
      <span
        className={`${cormorant.className} text-white [text-shadow:_0_1px_15px_white] text-3xl sm:text-4xl font-bold sm:text-4xl hover:cursor-pointer animate-fade-in`}
        onClick={() => showDiceRolled(false)}>
        My City Roller
      </span>
      <div className="flex gap-3">
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-slate-300 -rotate-12 animate-roll-in-blurred-right-1 transition delay-1000"
          src={BlueDieLeft}
          width={30}
          height={30}
          alt="blue building shape die #1"
        />
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-slate-300 rotate-3 animate-roll-in-blurred-right-2 transition delay-1500"
          src={BlueDieRight}
          width={30}
          height={30}
          alt="blue building shape die #2"
        />
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-slate-300 -rotate-45 scale-110 animate-roll-in-blurred-right-3 transition delay-2000"
          src={WhiteDie}
          width={30}
          height={30}
          alt="white building type die"
        />
      </div>
    </header>
  )
}
