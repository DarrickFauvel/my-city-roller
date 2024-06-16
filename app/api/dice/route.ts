import { NextRequest, NextResponse } from "next/server"
import dice from "@/assets/data"

type Die = {
  name: string
  faces: string[]
}

export async function GET(_request: NextRequest) {
  return NextResponse.json(dice)
}
