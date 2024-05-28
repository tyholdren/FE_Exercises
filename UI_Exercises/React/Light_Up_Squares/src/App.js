import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [squareOrder, setSquareOrder] = useState([]);

  useEffect(() => {
    if (squareOrder.length === 9) {
      let intervalId = setInterval(() => {
        setSquareOrder(prevOrder => {
          if (prevOrder.length === 0) {
            clearInterval(intervalId);
            return [];
          }
          return prevOrder.slice(0, -1);
        });
      }, 500);
    }
  }, [squareOrder]);

  const handleClick = cellId => {
    setSquareOrder(prevOrder => {
      return [...prevOrder, cellId];
    });
  };

  const cells = Array.from({ length: 9 }).map((_, index) => {
    return (
      <div
        key={`square-${index}`}
        id={`square-${index}`}
        onClick={event => handleClick(event.target.id)}
        className={
          squareOrder.includes(`square-${index}`) ? 'filled-cell' : 'blank-cell'
        }
      >
        {index}
      </div>
    );
  });

  return (
    <div className="App">
      <div className="container">{cells}</div>
    </div>
  );
}

export default App;
