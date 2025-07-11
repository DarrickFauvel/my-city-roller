"use client"
import "@/assets/css/dice.css"
import DiceDisplay from "@/components/dice-display"
import Header from "@/components/header"
import { useState } from "react"

export default function Home() {
  const [diceRolled, setDiceRolled] = useState(false)

  const showDiceRolled = (boolean: boolean) => setDiceRolled(boolean)

  return (
    <main className="prose relative bg-cyan-50 grid">
      <Header showDiceRolled={showDiceRolled} />

      <DiceDisplay showDiceRolled={showDiceRolled} diceRolled={diceRolled} />
    </main>
  )
}
