import "../../assets/css/dice.css"
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
          <>
            <span className="block"></span>
            <span className="block"></span>
            <span className="block"></span>
            <span className="block"></span>
            <span className="compass">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 19.88V22l-1.8-1.17l-4.79-9c.66-.21 1.26-.55 1.78-1zM15 7a3 3 0 0 1-3 3h-.44L5.8 20.83L4 22v-2.12L9.79 9c-1.1-1.23-1-3.13.24-4.24C10.57 4.28 11.27 4 12 4V2a1 1 0 0 1 1 1v1.18c1.2.42 2 1.55 2 2.82m-2 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"
                />
              </svg>
            </span>
            <span className={`circle ${side}`}></span>
          </>
        ) : (
          <BuildingType />
        )}
      </div>
    </div>
  )
}
