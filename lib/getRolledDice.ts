import dice from "@/assets/data"

type Die = {
  name: string
  faces: string[]
}

export default function getRolledDice() {
  const rollDie = (die: Die) => {
    const faces = die.faces
    const randomIndex = Math.floor(Math.random() * faces.length)
    return faces[randomIndex]
  }

  const rolledDice: any = {}

  dice.forEach((die) => {
    rolledDice[die.name] = rollDie(die)
  })

  return rolledDice
}
