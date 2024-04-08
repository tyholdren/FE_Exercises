// ControlButtons.js
import React from 'react';

function ControlButtons({ isActive, onStart, onPause, onReset }) {
  return (
    <div>
      {!isActive && <button onClick={onStart}>Start</button>}
      {isActive && (
        <>
          <button onClick={onPause}>Pause</button>
          <button onClick={onReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default ControlButtons;
