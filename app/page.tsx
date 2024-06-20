"use client"
import "@/assets/css/dice.css"
import DiceDisplay from "@/components/DiceDisplay"
import Header from "@/components/Header"
import { useState } from "react"

export default function Home() {
  const [diceRolled, setDiceRolled] = useState(false)

  const showDiceRolled = (boolean: boolean) => setDiceRolled(boolean)

  return (
    <main className="prose">
      <Header showDiceRolled={showDiceRolled} />

      <DiceDisplay showDiceRolled={showDiceRolled} diceRolled={diceRolled} />
    </main>
  )
}
