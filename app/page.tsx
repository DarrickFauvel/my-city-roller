"use client"
import "@/assets/css/dice.css"
import DiceDisplay from "@/components/DiceDisplay"
import Header from "@/components/Header"
import { useState } from "react"

export default function Home() {
  const [diceRolled, setDiceRolled] = useState(false)
  return (
    <main className="prose">
      <Header />

      <DiceDisplay />
    </main>
  )
}
