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

function FormRow({
  fieldId,
  onChange,
  type,
  label,
  placeholder,
  value,
  checked,
}) {
  return (
    <div className="form-container">
      <label htmlFor={fieldId}>{label}</label>
      {type === 'boolean' ? (
        <input
          id={fieldId}
          onChange={onChange}
          name={fieldId}
          type="checkbox"
          checked={checked}
        />
      ) : (
        <input
          id={fieldId}
          onChange={onChange}
          value={value}
          name={fieldId}
          type="text" // Keep it simple, use 'text' for non-checkbox types
          placeholder={placeholder || ''}
        />
      )}
    </div>
  );
}

const App = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    unsubscribe: false,
    reason: '',
  });

  const handleOnChange = event => {
    const { name, value, type, checked } = event.target;
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form>
      {Object.entries(FORM2).map(([curKey, valueObj]) => {
        // Hide 'reason' based on 'unsubscribe' state
        if (valueObj.hidden && valueObj.hidden(formValues)) {
          return null;
        }
        return (
          <FormRow
            key={curKey}
            fieldId={curKey}
            onChange={handleOnChange}
            type={valueObj.type}
            label={valueObj.label}
            placeholder={valueObj.placeholder}
            value={formValues[curKey]}
            checked={formValues[curKey]}
          />
        );
      })}
    </form>
  );
};

export default App;
