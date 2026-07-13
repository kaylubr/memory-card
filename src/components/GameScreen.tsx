import { useState } from 'react'
import type { Character } from '../types'
import GameCards from './cards/GameCards'

interface GameScreenProps {
  casts: Character[]
}

const GameScreen = ({ casts }: GameScreenProps) => {
  const [score, setScore] = useState(0)
  const [guesses, setGuessss] = useState([])
  const [highestScore, setHighestScore] = useState(0)

  return (
    <div className='game-container'>
      <header>Dunder Mifflin</header>
      <main>
        <GameCards casts={casts} />
      </main>
    </div>
  )
}

export default GameScreen