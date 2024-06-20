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
      className={`flex items-center justify-between bg-gradient-to-b from-cyan-900 to-cyan-300 px-8`}>
      <span
        className={`${cormorant.className} text-white text-3xl sm:text-4xl font-bold sm:text-4xl hover:cursor-pointer animate-fade-in`}
        onClick={() => showDiceRolled(false)}>
        My City Roller
      </span>
      <div className="flex gap-2">
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-cyan-500 shadow-cyan-300 -rotate-12 animate-roll-in-blurred-right transition delay-1000"
          src={BlueDieLeft}
          width={30}
          height={30}
          alt="blue building shape die #1"
        />
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-cyan-500 shadow-cyan-300 rotate-3 animate-roll-in-blurred-right transition delay-1500"
          src={BlueDieRight}
          width={30}
          height={30}
          alt="blue building shape die #2"
        />
        <Image
          className="w-6 sm:w-12 outline outline-1 outline-cyan-500 shadow-cyan-300 -rotate-45 scale-110 animate-roll-in-blurred-right transition delay-2000"
          src={WhiteDie}
          width={30}
          height={30}
          alt="white building type die"
        />
      </div>
    </header>
  )
}
