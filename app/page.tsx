import "@/assets/css/dice.css"
import DiceDisplay from "@/components/DiceDisplay"

export default function Home() {
  return (
    <main className="prose p-8">
      <h1>My City Roller</h1>

      <DiceDisplay />

      {/* <span>corner</span>
      <div className="die building-shape-outer">
        <div className="building-shape-inner shape-corner">
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="circle right"></span>
        </div>
      </div>

      <span>one horizontal</span>
      <div className="die building-shape-outer">
        <div className="building-shape-inner shape-one-horizontal">
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="circle right"></span>
        </div>
      </div>

      <span>two horizontal</span>
      <div className="die building-shape-outer">
        <div className="building-shape-inner shape-two-horizontal">
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="circle right"></span>
        </div>
      </div>

      <span>two vertical</span>
      <div className="die building-shape-outer">
        <div className="building-shape-inner shape-two-vertical">
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="block"></span>
          <span className="circle right"></span>
        </div>
      </div>

      <h2>Building type</h2>
      <div className="die builing-type"></div> */}
    </main>
  )
}
