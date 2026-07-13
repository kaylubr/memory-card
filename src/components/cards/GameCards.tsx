import { useState } from 'react';

import type { Character } from '../../types'

import Card from './index'

interface GameCardsProps {
  casts: Character[]
}

const GameCards = ({ casts }: GameCardsProps) => {
  const [isFlipped, setIsFlipped] = useState(true)

  return (
    <div className="game-grid">
      {casts.map((cast) => (
        <Card 
          key={cast.id} 
          cast={cast}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />
      ))}
    </div>
  );
};

export default GameCards