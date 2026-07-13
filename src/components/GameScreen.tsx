import { useState } from 'react'
import type { Character } from '../types'
import GameCards from './cards/GameCards'

interface GameScreenProps {
  casts: Character[]
  isGameActive: boolean
  toggleActive: React.Dispatch<React.SetStateAction<boolean>>
}

const GameScreen = ({ casts, isGameActive, toggleActive }: GameScreenProps) => {
  const [guesses, setGuesses] = useState<number[]>([])
  const [highestScore, setHighestScore] = useState(0)

  return (
    <div className='game-container'>
      <header>
        <button 
          className='back-btn'
          onClick={() => toggleActive(!isGameActive)}
        >
          Go back
        </button>
        <div>
          <h2>Score: {guesses.length}</h2>
          <h2>Highest score: {highestScore}</h2>
        </div>
      </header>
      <main>
        <GameCards 
          casts={casts} 
          guesses={guesses}
          addGuess={setGuesses}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
        />
      </main>
    </div>
  )
}

export default GameScreen