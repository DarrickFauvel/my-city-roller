"use client"
import { useState } from "react"
import Button from "../Button"
import Die from "../Die"
import getRolledDice from "@/lib/getRolledDice"
import Image from "next/image"
import BoxTopImage from "@/assets/images/my-city-roll-and-build-box-top.webp"
import DelayedComponent from "../DelayedComponent"

type DiceDisplayProps = {
  showDiceRolled: (boolean: boolean) => void
  diceRolled: boolean
}

type Die = {
  name: string
  faces: string[]
}

export default function DiceDisplay(props: DiceDisplayProps) {
  const { showDiceRolled, diceRolled } = props

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
    <div className="mt-16 px-8 flex flex-col items-center">
      {diceRolled ? (
        <div className="flex flex-col items-center gap-8 py-8">
          <div className="flex gap-2">
            <DelayedComponent timeoutValue={1000}>
              <Die
                variant="building-shape"
                side="left"
                face={dieFaces["building-shape-die-left"]}
              />
            </DelayedComponent>

            <DelayedComponent timeoutValue={2000}>
              <Die
                variant="building-shape"
                side="right"
                face={dieFaces["building-shape-die-right"]}
              />
            </DelayedComponent>
          </div>

          <DelayedComponent timeoutValue={3000}>
            <Die variant="building-type" face={dieFaces["building-type-die"]} />
          </DelayedComponent>
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
