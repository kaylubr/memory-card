import React, { useState } from 'react';

import type { Character } from '../../types'

import Card from './index'

interface GameCardsProps {
  casts: Character[]
  guesses: number[]
  addGuess: React.Dispatch<React.SetStateAction<number[]>>
  highestScore: number
  setHighestScore: React.Dispatch<React.SetStateAction<number>>
  shuffleCasts: () => void
}

const GameCards = ({ 
  casts, 
  guesses, 
  addGuess, 
  highestScore, 
  setHighestScore,
  shuffleCasts
}: GameCardsProps) => {
  const [isFlipped, setIsFlipped] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false);

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
          shuffleCasts={shuffleCasts}
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
        />
      ))}
    </div>
  );
};

export default GameCards