import { useState, useEffect } from 'react';

import './App.css';
function App() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    if (totalSeconds === 0) {
      return;
    }

    let intervalId;

    intervalId = setInterval(() => {
      setTotalSeconds(prevSeconds => {
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [totalSeconds]);

  const updateHours = event => {
    setHours(event.target.value);
  };

  const updateMinutes = event => {
    setMinutes(event.target.value);
  };

  const updateSeconds = event => {
    setSeconds(event.target.value);
  };

  const convertToSeconds = (hours, minutes, seconds) => {
    if (hours === '') hours = 0;
    if (minutes === '') minutes = 0;
    if (seconds === '') seconds = 0;

    const convertedHours = parseInt(hours) * 60 * 60;
    const convertedMinutes = parseInt(minutes) * 60;

    const totalSeconds = convertedHours + convertedMinutes + parseInt(seconds);
    setTotalSeconds(totalSeconds);
  };

  const formatCountdown = totalSeconds => {
    const formattedHours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const formattedMinutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const formattedSeconds = (totalSeconds % 60).toString().padStart(2, '0');

    return ` ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  };

  return (
    <div>
      <span>Countdown Timer</span>
      <div>
        <label htmlFor="hours-input" />
        <input
          type="string"
          name="hours-input"
          id="hours-input"
          value={hours}
          onChange={updateHours}
          placeholder="HH"
        />
        <label htmlFor="minutes-input" />
        <input
          type="string"
          name="minutes-input"
          id="minutes-input"
          value={minutes}
          onChange={updateMinutes}
          placeholder="MM"
        />
        <label htmlFor="seconds-input" />
        <input
          type="string"
          name="seconds-input"
          id="seconds-input"
          value={seconds}
          onChange={updateSeconds}
          placeholder="SS"
        />
      </div>
      <button onClick={() => convertToSeconds(hours, minutes, seconds)}>
        Start Countdown
      </button>
      <div>{formatCountdown(totalSeconds)}</div>
    </div>
  );
}

export default App;
