import React, { useState, useEffect } from 'react';
import './style.css';
const NUMS = [1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 1, 6, 6, 6];

export default function App() {
  const [values, setValues] = useState(new Map());
  const [xMax, setXMax] = useState(0);
  const [yMax, setYMax] = useState(0);

  useEffect(() => {
    setFrequencyMap();
  }, []);

  const setFrequencyMap = array => {
    const freqMap = new Map();

    NUMS.forEach(num => {
      if (freqMap.has(num)) {
        let freq = freqMap.get(num);
        freqMap.set(num, freq + 1);
      } else {
        freqMap.set(num, 1);
      }
    });
    setValues(freqMap);
    getMaxes(freqMap);
  };

  const getMaxes = values => {
    let highestFreq = 0;
    let highestValue = 0;

    for (const [curValue, curFreq] of [...values.entries()]) {
      highestFreq = Math.max(highestFreq, curFreq);
      highestValue = Math.max(highestValue, curValue);
    }

    setXMax(highestValue);
    setYMax(highestFreq);
  };

  return (
    <div>
      <Grid rows={xMax} columns={yMax} grid={values} />
    </div>
  );
}

function Grid({ rows, columns, grid }) {
  const rowArray = new Array(rows + 1).fill(0);
  const keyArray = [...grid.keys()];

  return (
    <table>
      <tbody>
        {rowArray.map((_, rowIndex) => (
          <tr key={rowIndex}>
            <td className="axis-square">{rows - rowIndex + 1}</td>
            {keyArray.map((value, valueIndex) => {
              const isFilled = columns - rowIndex < grid.get(value) - 2;
              return (
                <td
                  key={valueIndex}
                  className={isFilled ? 'filled-square' : 'blank-square'}
                ></td>
              );
            })}
          </tr>
        ))}
        <tr>
          <td className="axis-square"></td> {/* Empty cell for alignment */}
          {keyArray.map((value, valueIndex) => (
            <td key={valueIndex} className="axis-square">
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
