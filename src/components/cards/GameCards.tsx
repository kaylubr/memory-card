import React, { useState } from 'react';

import type { Character } from '../../types'

import Card from './index'

interface GameCardsProps {
  casts: Character[]
  guesses: number[]
  addGuess: React.Dispatch<React.SetStateAction<number[]>>
  highestScore: number
  setHighestScore: React.Dispatch<React.SetStateAction<number>>
}

const GameCards = ({ 
  casts, 
  guesses, 
  addGuess, 
  highestScore, 
  setHighestScore 
}: GameCardsProps) => {
  const [isFlipped, setIsFlipped] = useState(true)

  return (
    <div className="game-grid">
      {casts.map((cast) => (
        <Card 
          key={cast.id} 
          cast={cast}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          guesses={guesses}
          addGuess={addGuess}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
        />
      ))}
    </div>
  );
};

export default GameCards