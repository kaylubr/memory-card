import type React from 'react';
import type { Character }  from '../../types'

interface CardProps {
  cast: Character
  isFlipped: boolean
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>
  guesses: number[]
  addGuess: React.Dispatch<React.SetStateAction<number[]>>
  highestScore: number
  setHighestScore: React.Dispatch<React.SetStateAction<number>>
}

const Card = ({ 
  cast, 
  isFlipped, 
  setIsFlipped, 
  guesses, 
  addGuess,
  highestScore,
  setHighestScore
}: CardProps) => {
  const clickCard = () => {
    if (guesses.includes(cast.id) && guesses.length > highestScore) {
      setHighestScore(guesses.length)
      addGuess([])
    } else {
      addGuess(guesses.concat(cast.id))
    }
    setIsFlipped(!isFlipped)
    setTimeout(() => {
      setIsFlipped(isFlipped)
    }, 800)
  }
  
  return (
    <div
      className={`memory-card ${isFlipped ? 'is-flipped' : ''}`}
      tabIndex={0}
      role="button"
      onClick={clickCard}
    >
      <div className="memory-card-inner">
        <div className="memory-card-face memory-card-back">
          <span className="memory-card-mark">?</span>
        </div>
        <div className="memory-card-face memory-card-front">
          {cast.image?.medium ? (
            <img
              src={cast.image.medium}
              alt={cast.name}
              className="memory-card-img"
              loading="lazy"
            />
          ) : (
            <div className="memory-card-img memory-card-img-fallback" aria-hidden="true">
              ?
            </div>
          )}
          <p className="memory-card-name">{cast.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card