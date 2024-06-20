import "@/assets/css/dice.css"
import DiceDisplay from "@/components/DiceDisplay"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="prose">
      <Header />

      <DiceDisplay />
    </main>
  )
}
