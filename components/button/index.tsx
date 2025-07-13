"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/types"

export default function RollButton(props: ButtonProps) {
  return (
    <Button className="mt-6 w-3/4 py-6" onClick={props.onClick}>
      Roll Dice
    </Button>
  )
}
