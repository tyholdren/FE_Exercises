import { useState, useEffect } from 'react';
export default function Timer({ setIsActive, hours, minutes, seconds }) {
  const [displayedButtons, setDisplayedButtons] = useState(['start']);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
  );

  const initiateCountdown = () => {
    setTotalSeconds(
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
    );
  };

  useEffect(() => {
    let intervalId;
    if (isCountingDown) {
      intervalId = setInterval(() => {
        setTotalSeconds(prevSeconds => {
          if (prevSeconds <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCountingDown]);

  const updateButtons = input => {
    if (input === 'start') {
      setIsCountingDown(true);
      setIsActive(true);
      setDisplayedButtons(['pause', 'reset']);
    } else if (input === 'pause') {
      setIsCountingDown(false);
      setIsActive(false);
      setDisplayedButtons(['start', 'reset']);
    } else if (input === 'reset') {
      setIsCountingDown(false);
      setIsActive(false);
      setDisplayedButtons(['start']);
    }
  };

  const reset = () => {
    setTotalSeconds(0);
  };

  const formatTime = () => {
    const hours = Math.floor(totalSeconds / 3600).toString();
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString();
    const seconds = (totalSeconds % 60).toString();

    const formattedTime = `${hours.padStart(2, '0')} : ${minutes.padStart(
      2,
      '0'
    )} : ${seconds.padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div>
      <div hidden={!isCountingDown}>Remaining Time: {formatTime()}</div>
      <button
        onClick={() => {
          initiateCountdown();
          updateButtons('start');
        }}
        hidden={!displayedButtons.includes('start')}
      >
        Start
      </button>
      <button
        onClick={() => updateButtons('pause')}
        hidden={!displayedButtons.includes('pause')}
      >
        Pause
      </button>
      <button
        onClick={() => {
          reset();
          updateButtons('reset');
        }}
        hidden={!displayedButtons.includes('reset')}
      >
        Reset
      </button>
    </div>
  );
}
