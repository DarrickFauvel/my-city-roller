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
    <header className="flex items-center justify-between bg-blue-200 px-8">
      <span
        className={`${cormorant.className} text-white text-4xl font-semibold sm:text-4xl hover:cursor-pointer animate-fade-in`}
        onClick={() => showDiceRolled(false)}>
        My City Roller
      </span>
      <div className="flex gap-3">
        <Image
          className="shadow-lg -rotate-12"
          src={BlueDieLeft}
          width={30}
          height={30}
          alt="blue building shape die #1"
        />
        <Image
          className="shadow-lg rotate-3"
          src={BlueDieRight}
          width={30}
          height={30}
          alt="blue building shape die #2"
        />
        <Image
          className="shadow-lg -rotate-45 scale-110"
          src={WhiteDie}
          width={30}
          height={30}
          alt="white building type die"
        />
      </div>
    </header>
  )
}
