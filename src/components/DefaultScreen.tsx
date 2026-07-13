import type React from "react"

interface DefaultScreenProps {
  toggleActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DefaultScreen = ({ toggleActive }: DefaultScreenProps) => {
  return (
    <main className="default-screen">
      <h1 id="game-title">Dunder Mifflin Memory Match</h1>
      <button className="start-button" type="button" onClick={() => toggleActive(true)}>
        Start Game
      </button>
    </main>
  )
}

export default DefaultScreen