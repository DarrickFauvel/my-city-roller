import faceSolid from "@/assets/images/house-solid.svg"
import faceLined from "@/assets/images/house-lined.svg"
import faceCrossed from "@/assets/images/house-crossed.svg"
import Image from "next/image"

type BuildingTypeProps = {
  face: string | null
}

export default function BuildingType(props: BuildingTypeProps) {
  const { face } = props

  const faceImageSrc =
    face === "solid" ? faceSolid : face === "lined" ? faceLined : faceCrossed

  return (
    <span className="building-type">
      <Image
        className="mt-0 p-3"
        src={faceImageSrc}
        alt=""
        width={500}
        height={500}
      />
    </span>
  )
}
