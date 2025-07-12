import type { Metadata } from "next"
import { Noto_Serif } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
  // const [diceRolled, setDiceRolled] = useState(false)

  // const showDiceRolled = (boolean: boolean) => setDiceRolled(boolean)

  return (
    <html lang="en">
      <body className={`${noto_serif.className} prose relative bg-cyan-50 h-screen`}>
        <div className="flex flex-col h-full">
          <Header
          // showDiceRolled={showDiceRolled}
          />
          <main className="prose relative bg-cyan-50 flex-1 overflow-y-auto pt-20 px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
