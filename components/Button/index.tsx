"use client"
import { Button } from "@/components/ui/button"

type ButtonProps = {
  onClick: () => void
}

export default function RollButton(props: ButtonProps) {
  return (
    <Button className="mt-6 w-1/2 py-6" onClick={props.onClick}>
      Roll Dice
    </Button>
  )
}
