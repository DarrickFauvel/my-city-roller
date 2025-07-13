"use client"

import { Button } from "@/components/ui/button"
import { OnClickProps } from "@/types"

export default function RollDiceButton({ onClick }: OnClickProps) {
  return (
    <Button className="mt-6 w-3/4 py-6" onClick={onClick}>
      Roll Dice
    </Button>
  )
}
