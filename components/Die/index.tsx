import "../../assets/css/dice.css"
import BuildingShape from "./BuildingShape"
import BuildingType from "./components/BuildingType"

type DieProps = {
  variant: string
  side?: string
  face: string | null
}

export default function Die(props: DieProps) {
  const { variant, side, face } = props

  return (
    <div className={`die ${variant} ${side || null}`}>
      <div className={`${face}`}>
        {variant === "building-shape" ? (
          <BuildingShape side={side} />
        ) : (
          <BuildingType face={face} />
        )}
      </div>
    </div>
  )
}
