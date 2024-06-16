import { NextRequest, NextResponse } from "next/server"
import dice from "@/assets/data"

type Die = {
  name: string
  faces: string[]
}

type RolledDice = {
  "building-shape-die-left": string
  "building-shape-die-right": string
  "builing-type-die": string
}

export async function GET(_request: NextRequest) {
  const rollDie = (die: Die) => {
    const faces = die.faces
    const randomIndex = Math.floor(Math.random() * faces.length)
    return faces[randomIndex]
  }

  const rolledDice = {}

  dice.forEach((die) => {
    rolledDice[die.name] = rollDie(die)
  })

  return NextResponse.json(rolledDice)
}
