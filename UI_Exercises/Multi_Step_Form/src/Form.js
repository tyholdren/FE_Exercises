import { useState } from 'react';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

export default function Form() {
  const [activeForm, setActiveForm] = useState('form3');
  const FORMS = {
    form1: <Form1 />,
    form2: <Form2 />,
    form3: <Form3 />,
    form4: <Form4 />,
  };
  return (
    <div>
      <div>
        {FORMS[activeForm]}
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  );
}
