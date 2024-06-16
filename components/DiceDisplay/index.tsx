"use client"
import { useState } from "react"
import Button from "../Button"
import dice from "@/assets/data"
import Die from "../Die"

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

  const rollDie = (die: Die) => {
    const faces = die.faces
    const randomIndex = Math.floor(Math.random() * faces.length)
    return faces[randomIndex]
  }

  const handleClick = () => {
    dice.map((die) => {
      setDieFaces((prev) => {
        return {
          ...prev,
          [die.name]: rollDie(die),
        }
      })
    })

    setDiceRolled(true)
    console.log(dieFaces)
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
              // face="compass-right"
              face={dieFaces["building-shape-die-right"]}
            />
          </div>
          <Die variant="building-type" />
        </div>
      ) : null}

      <Button onClick={handleClick} />
    </div>
  )
}
