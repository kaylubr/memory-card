import { useState } from 'react'
import type { Character } from '../types'
import GameCards from './cards/GameCards'

interface GameScreenProps {
  casts: Character[]
  isGameActive: boolean
  toggleActive: React.Dispatch<React.SetStateAction<boolean>>
}

const GameScreen = ({ casts, isGameActive, toggleActive }: GameScreenProps) => {
  const [score, setScore] = useState(0)
  const [guesses, setGuessss] = useState([])
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
          <h2>Score: {score}</h2>
          <h2>Highest score: {score}</h2>
        </div>
      </header>
      <main>
        <GameCards casts={casts} />
      </main>
    </div>
  )
}

export default GameScreen