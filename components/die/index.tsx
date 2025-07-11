import "@/assets/css/dice.css"
import BuildingShape from "./building-shape"
import BuildingType from "./components/building-type"

type DieProps = {
  variant: string
  side?: string | undefined
  face: string | null
}

export default function Die(props: DieProps) {
  const { variant, side, face } = props

  return (
    <div className={`die ${variant} ${side || null} animate-rotate-center`}>
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
