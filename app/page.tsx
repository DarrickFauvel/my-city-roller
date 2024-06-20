import "@/assets/css/dice.css"
import DiceDisplay from "@/components/DiceDisplay"

export default function Home() {
  return (
    <main className="prose p-8">
      <h1>My City Roller</h1>

      <DiceDisplay />
    </main>
  )
}
