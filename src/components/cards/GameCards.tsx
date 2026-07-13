import type { Character } from '../../types'

import Card from './index'

interface GameCardsProps {
  casts: Character[]
}

const GameCards = ({ casts }: GameCardsProps) => {
  return (
    <div className="game-grid">
      {casts.map((cast) => (
        <Card key={cast.id} cast={cast} />
      ))}
    </div>
  );
};

export default GameCards