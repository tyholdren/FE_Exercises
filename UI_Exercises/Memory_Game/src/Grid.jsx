import { useEffect, useState } from 'react';
import Cell from './Cell';

export default function Grid() {
  const [activeCards, setActiveCards] = useState([]);
  const [matches, setMatches] = useState([]);
  const [pauseGame, setPauseGame] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (activeCards.length === 2) {
      setPauseGame(true);
      timeoutId = setTimeout(() => {
        if (activeCards[0].value === activeCards[1].value) {
          setMatches([...matches, ...activeCards]);
        }
        setActiveCards([]);
        setPauseGame(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [activeCards, matches]);

  const handleCardSelect = (pauseGame, cardId, cardValue) => {
    if (pauseGame) {
      return;
    }
    if (activeCards.length < 2) {
      const cardObj = { id: cardId, value: cardValue };
      setActiveCards([...activeCards, cardObj]);
    }
  };

  return (
    <div className="grid-container">
      {Array.from({ length: 16 }, (_, index) => {
        let value = index % 8;
        return (
          <Cell
            isActive={!!activeCards.find(({ id }) => id === index)}
            isDisabled={!!matches.find(({ id }) => id === index)}
            onClick={() => handleCardSelect(pauseGame, index, value)}
            key={index}
            id={value}
          />
        );
      })}
    </div>
  );
}
