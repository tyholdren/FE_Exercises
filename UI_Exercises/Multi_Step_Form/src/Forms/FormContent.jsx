import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

export default function FormContent({ index }) {
  const FORMS = [<Form1 />, <Form2 />, <Form3 />, <Form4 />];
  return (
    <div>
      {FORMS[index]}
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  );
}
