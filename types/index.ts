export type ButtonProps = {
  onClick: () => void
}

export type DelayedComponentProps = {
  timeoutValue: number
  children: React.ReactNode
}

export type Die = {
  name: string
  faces: string[]
}

export type OnClickProps = {
  onClick: () => void
}