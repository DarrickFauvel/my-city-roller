"use client"
import { useState } from "react"
import Button from "../Button"
import dice from "@/assets/data"
import Die from "../Die"
import getRolledDice from "@/lib/getRolledDice"
import Image from "next/image"
import BoxTopImage from "@/assets/images/my-city-roll-and-build-box-top.webp"

type Die = {
  name: string
  faces: string[]
}

export default function DiceDisplay() {
  const [dieFaces, setDieFaces] = useState({
    "building-shape-die-left": null,
    "building-shape-die-right": null,
    "building-type-die": null,
  })
  const [diceRolled, setDiceRolled] = useState(false)

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

    setDiceRolled(true)
  }

  return (
    <div>
      {diceRolled ? (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <Die
              variant="building-shape"
              side="left"
              face={dieFaces["building-shape-die-left"]}
            />
            <Die
              variant="building-shape"
              side="right"
              face={dieFaces["building-shape-die-right"]}
            />
          </div>
          <Die variant="building-type" face={dieFaces["building-type-die"]} />
        </div>
      ) : (
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
      )}

      <Button onClick={handleClick} />
    </div>
  )
}
