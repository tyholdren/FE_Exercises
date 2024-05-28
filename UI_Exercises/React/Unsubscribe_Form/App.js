import React, { useState } from 'react';
import './style.css';

const FORM2 = {
  email: { type: 'string', label: 'Email' },
  unsubscribe: { type: 'boolean', label: 'Unsubscribe from marketing emails' },
  reason: {
    type: 'string',
    label: 'Please tell us why!',
    hidden: ({ unsubscribe }) => !unsubscribe,
  },
};

function FormRow({ key, type, label, value, placeholder, onChange, checked }) {
  return (
    <div className="form-container">
      <label htmlFor={key}>{label}</label>
      {type === 'boolean' ? (
        <input
          id={key}
          name={key}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      ) : (
        <input
          id={key}
          value={value}
          name={key}
          type={type}
          placeholder={placeholder !== undefined ? placeholder : ''}
          onChange={onChange}
        />
      )}
    </div>
  );
}

const App = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    unsubscribe: true,
    reason: '',
  });

  const handleInputChange = event => {
    const { name, type, value, checked } = event.target;
    setInputValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const formKeys = Object.keys(FORM2);
  return (
    <form>
      {formKeys.map(curKey => {
        const valueObj = FORM2[curKey];
        if (valueObj.hidden && valueObj.hidden(inputValues)) {
          return null;
        }
        return (
          <FormRow
            key={curKey}
            type={valueObj.type === 'boolean' ? 'checkbox' : valueObj.type}
            label={valueObj.label}
            value={inputValues[curKey]}
            placeholder={valueObj.placeholder}
            onChange={handleInputChange}
            checked={inputValues[curKey]}
          />
        );
      })}
    </form>
  );
};

export default App;
