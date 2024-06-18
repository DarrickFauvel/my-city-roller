import { NextRequest, NextResponse } from "next/server"
import dice from "@/assets/data"

type Die = {
  name: string
  faces: string[]
}

export async function GET(_request: NextRequest) {
  const rollDie = (die: Die) => {
    const faces = die.faces
    const randomIndex = Math.floor(Math.random() * faces.length)
    return faces[randomIndex]
  }

  const rolledDice: any = {}

  dice.forEach((die) => {
    rolledDice[die.name] = rollDie(die)
  })

  return NextResponse.json(rolledDice)
}
