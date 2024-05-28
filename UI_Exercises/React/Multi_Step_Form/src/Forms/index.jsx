import { useState } from 'react';
import Section from '../Section';
import FormContent from './FormContent';

export default function Form() {
  const [index, setIndex] = useState(0);

  const NAV_PANEL = [
    { id: 1, stepNumber: 'STEP 1', content: 'YOUR INFO' },
    { id: 2, stepNumber: 'STEP 2', content: 'SELECT PLAN' },
    { id: 3, stepNumber: 'STEP 3', content: 'ADD-ONS' },
    { id: 4, stepNumber: 'STEP 4', content: 'SUMMARY' },
  ];

  const navigateToForm = formIndex => {
    setIndex(formIndex);
  };

  return (
    <div className="form-container">
      <div>
        {NAV_PANEL.map(({ id, stepNumber, content }, index) => {
          return (
            <Section
              key={id}
              button={id}
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
