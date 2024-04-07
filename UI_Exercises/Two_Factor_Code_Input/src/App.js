import { useRef } from 'react';
import './App.css';

const PASSWORD = '1234';

function App() {
  const inputRef0 = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const refsArray = [inputRef0, inputRef1, inputRef2, inputRef3];

  const submitCode = event => {
    event.preventDefault();
    const allInputs = refsArray.map(ref => ref.current.value);

    if (allInputs.length < 4 || allInputs.includes('')) {
      alert('Please enter all fields');
      return;
    }

    if (allInputs.join('') === PASSWORD) {
      alert('correct code');
    } else {
      alert('incorrect code');
    }
  };

  const handleChange = (event, index) => {
    if (event.key === 'Backspace' && event.target.value === '' && index > 0) {
      refsArray[index - 1].current.focus();
      return;
    }

    event.target.value = event.target.value.slice(0, 1);

    if (event.target.value && index < 3) {
      refsArray[index + 1].current.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && event.target.value === '' && index > 0) {
      event.preventDefault();
      refsArray[index - 1].current.focus();
    }
  };

  return (
    <div className="App">
      <form className="form-container" onSubmit={submitCode}>
        <div className="code-input-container">
          {refsArray.map((ref, index) => {
            return (
              <input
                key={index}
                ref={ref}
                onChange={event => handleChange(event, index)}
                onKeyDown={event => handleKeyDown(event, index)}
                type="number"
                id={`input-${index}`}
                name={`input-${index}`}
              />
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
