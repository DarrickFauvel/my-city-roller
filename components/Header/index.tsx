import Image from "next/image"
import BlueDieLeft from "@/assets/images/blue-die-left.webp"
import BlueDieRight from "@/assets/images/blue-die-right.webp"
import WhiteDie from "@/assets/images/white-die.webp"

export default function Header() {
  return (
    <header className="flex gap-4 items-center justify-between bg-blue-200 px-8">
      <span className="text-2xl font-bold">My City Roller</span>
      <div className="flex gap-4">
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
