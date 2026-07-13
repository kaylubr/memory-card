import { useState } from 'react'
import type { Character } from '../types'

interface GameScreenProps {
  casts: Character[]
}

const GameScreen = ({ casts }: GameScreenProps) => {
  const [score, setScore] = useState(0)
  const [guesses, setGuessss] = useState([])
  const [highestScore, setHighestScore] = useState(0)
}

export default GameScreen