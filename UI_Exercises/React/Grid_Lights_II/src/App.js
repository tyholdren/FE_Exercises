import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    if (activeCells.length === 8) {
      let intervalId = setInterval(() => {
        setActiveCells(prevCells => {
          return prevCells.slice(0, prevCells.length - 1);
        });
      }, 1000);

      if (activeCells.length === 0) {
        clearInterval(intervalId);
        return;
      }
    }
  }, [activeCells]);

  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const addToActiveCells = index => {
    if (index === 4) return;
    setActiveCells([...activeCells, index]);
  };

  return (
    <div className="App">
      <div className="grid-container">
        {cells.map((_, index) => {
          return (
            <div
              key={`cell-${index}`}
              className={
                activeCells.includes(index) ? 'active-cell' : 'blank-cell'
              }
              onClick={() => addToActiveCells(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
