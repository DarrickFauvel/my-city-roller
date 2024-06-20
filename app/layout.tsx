import type { Metadata } from "next"
import { Noto_Serif } from "next/font/google"
import "./globals.css"

const noto_serif = Noto_Serif({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My City Roller",
  description: "Dice rolling app for My City: Roll & Build roll & write game",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={noto_serif.className}>{children}</body>
    </html>
  )
}
