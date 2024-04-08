import { useState } from 'react';
import Section from '../Section';
import FormContent from './FormContent';

export default function Form() {
  const [index, setIndex] = useState(0);

  const NAV_PANEL = [
    { button: 1, stepNumber: 'STEP 1', content: 'YOUR INFO' },
    { button: 2, stepNumber: 'STEP 2', content: 'SELECT PLAN' },
    { button: 3, stepNumber: 'STEP 3', content: 'ADD-ONS' },
    { button: 4, stepNumber: 'STEP 4', content: 'SUMMARY' },
  ];

  const navigateToForm = index => {
    setIndex(index);
  };

  return (
    <div className="form-container">
      <div>
        {NAV_PANEL.map(({ button, stepNumber, content }, index) => {
          return (
            <Section
              key={index}
              button={button}
              stepNumber={stepNumber}
              content={content}
              onClick={() => navigateToForm(index)}
            />
          );
        })}
      </div>
      <FormContent index={index} />
    </div>
  );
}
