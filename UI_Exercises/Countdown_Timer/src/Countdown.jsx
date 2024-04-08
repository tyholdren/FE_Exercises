import TimeInput from './TimeInput';
import Timer from './Timer';
import { useState } from 'react';

export default function Countdown() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [isActive, setIsActive] = useState(false);

  const padStart = value => {
    if (value < 9) {
      return 0 + value;
    } else {
      return value;
    }
  };

  const updateHours = event => {
    const paddedValue = padStart(event.target.value);
    setHours(paddedValue);
  };

  const updateMinutes = event => {
    const paddedValue = padStart(event.target.value);
    setMinutes(paddedValue);
  };

  const updateSeconds = event => {
    const paddedValue = padStart(event.target.value);
    setSeconds(paddedValue);
  };

  const INPUTS_INFO = [
    {
      htmlFor: 'hour-input',
      id: 'hour-input',
      name: 'hour-input',
      type: 'number',
      placeholder: 'HH',
      onInput: updateHours,
      value: hours,
      min: '0',
    },
    {
      htmlFor: 'minute-input',
      id: 'minute-input',
      name: 'minute-input',
      type: 'number',
      placeholder: 'MM',
      onInput: updateMinutes,
      value: minutes,
      min: '0',
    },
    {
      htmlFor: 'second-input',
      id: 'second-input',
      name: 'second-input',
      type: 'number',
      placeholder: 'SS',
      onInput: updateSeconds,
      value: seconds,
      min: '0',
    },
  ];

  const inputs = INPUTS_INFO.map(
    ({ htmlFor, id, name, type, placeholder, onInput, value, min }) => {
      return (
        <TimeInput
          key={id}
          htmlFor={htmlFor}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onInput={onInput}
          value={value}
          min={min}
        />
      );
    }
  );

  return (
    <div className="time-container">
      {!isActive ? inputs : null}

      <Timer
        setIsActive={setIsActive}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
