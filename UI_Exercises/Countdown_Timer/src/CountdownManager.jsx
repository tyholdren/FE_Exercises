// Countdown.js
import React, { useState } from 'react';
import TimerDisplay from './TimerDisplay';
import ControlButtons from './ControlButtons';

export default function CountdownManager() {
  const [isActive, setIsActive] = useState(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const initialSeconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

  const handleReset = () => {
    setIsActive(false);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <div className="countdown-container">
      {isActive ? (
        <TimerDisplay
          setIsActive={setIsActive}
          initialSeconds={initialSeconds}
          onTimeExpire={() => setIsActive(false)}
        />
      ) : (
        <div>
          <input
            type="text"
            value={hours}
            onChange={e => setHours(e.target.value.padStart(2, '0'))}
            placeholder="HH"
          />
          <input
            type="text"
            value={minutes}
            onChange={e => setMinutes(e.target.value.padStart(2, '0'))}
            placeholder="MM"
          />
          <input
            type="text"
            value={seconds}
            onChange={e => setSeconds(e.target.value.padStart(2, '0'))}
            placeholder="SS"
          />
        </div>
      )}
      <ControlButtons
        isActive={isActive}
        onStart={() => setIsActive(true)}
        onPause={() => setIsActive(false)}
        onReset={handleReset}
      />
    </div>
  );
}
