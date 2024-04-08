// TimerDisplay.js
import React, { useEffect, useState } from 'react';

function TimerDisplay({ initialSeconds, onTimeExpire }) {
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (totalSeconds <= 0) {
      onTimeExpire();
      return;
    }
    const intervalId = setInterval(() => {
      setTotalSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [totalSeconds, onTimeExpire]);

  const formatTime = () => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return <div>{formatTime()}</div>;
}

export default TimerDisplay;
