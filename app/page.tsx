"use client"
import "@/assets/css/dice.css"
import DiceDisplay from "@/components/dice-display"
import Image from "next/image"
import BoxTopImage from "@/assets/images/my-city-roll-and-build-box-top.webp"
import getRolledDice from "@/lib/getRolledDice"
import { useState } from "react"
import RollButton from "@/components/button"
import Link from "next/link"

export default function Home() {
  const [dieFaces, setDieFaces] = useState({
    "building-shape-die-left": null,
    "building-shape-die-right": null,
    "building-type-die": null,
  })

  const handleClick = async () => {
    const rolledDice = await getRolledDice()

    for (const [key, value] of Object.entries(rolledDice)) {
      setDieFaces((prev) => {
        return {
          ...prev,
          [key]: value,
        }
      })
    }

    showDiceRolled(true)
  }

  return (
    // <DiceDisplay showDiceRolled={showDiceRolled} diceRolled={diceRolled} />
    <section>
      <div className="gap-8">
        <h2 className="text-balance">Welcome to My City Roller!</h2>
        <Image
          className="float-left w-32"
          src={BoxTopImage}
          width={100}
          height={100}
          alt="Game box top"
        />
        <p className="float-right">
          This is an online dice roller for the wonderfully fun roll & write
          game, <strong>My City: Roll & Build</strong>.
        </p>
        <br className="clear-both" />
      </div>

      <span>&gt; &gt; &nbsp;</span>
      <Link href="/roll" className="underline-offset-4">
        Let's Roll & Build!
      </Link>
    </section>
  )
}
