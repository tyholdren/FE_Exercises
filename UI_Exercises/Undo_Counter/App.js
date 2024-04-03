import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState(0);
  const [undos, setUndos] = useState([]);
  const [undoClicked, setUndoClicked] = useState(false);
  const [undoIndex, setUndoIndex] = useState(-1);
  const [lastAction, setLastAction] = useState(0);
  const POSITIVE = 'positive';
  const NEGATIVE = 'negative';

  const changeValue = (input, changeValue) => {
    setUndos([...undos, value]);
    setUndoIndex(undoIndex + 1);
    if (changeValue === POSITIVE) {
      setValue(value + input);
    } else if (changeValue === NEGATIVE) {
      setValue(value - input);
    }
  };

  const undoChange = () => {
    if (undoClicked === false) {
      setUndoClicked(true);
    }

    const result = Math.abs(undos[undoIndex] - value);
    const newValue = undos[undoIndex];

    if (newValue > value) {
      setLastAction(result);
    } else {
      setLastAction(result * -1);
    }

    setValue(undos[undoIndex]);
    if (undoIndex > 0) {
      setUndoIndex(undoIndex - 1);
    }

    const newUndos = undos.slice(0, undos.length - 1);
    setUndos(newUndos);
  };

  const redoChange = () => {
    if (lastAction > 0) {
      changeValue(lastAction, NEGATIVE);
    } else {
      changeValue(lastAction, POSITIVE);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => undoChange()}>undo</button>
        <button
          disabled={undoClicked === false ? true : false}
          onClick={() => redoChange()}
        >
          redo
        </button>
      </div>
      <div className="counter-container">
        <div className="button-container">
          <button onClick={() => changeValue(100, NEGATIVE)}>-100</button>
          <button onClick={() => changeValue(10, NEGATIVE)}>-10</button>
          <button onClick={() => changeValue(1, NEGATIVE)}>-1</button>
        </div>
        <div className="value">{value}</div>
        <div className="button-container">
          <button onClick={() => changeValue(1, POSITIVE)}>+1</button>
          <button onClick={() => changeValue(10, POSITIVE)}>+10</button>
          <button onClick={() => changeValue(100, POSITIVE)}>+100</button>
        </div>
        <div className="history">{undos}</div>
      </div>
    </div>
  );
}
