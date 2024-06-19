"use client"
import { useState } from "react"
import Button from "../Button"
import dice from "@/assets/data"
import Die from "../Die"
import getRolledDice from "@/lib/getRolledDice"

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
      ) : null}

      <Button onClick={handleClick} />
    </div>
  )
}
