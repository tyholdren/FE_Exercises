import PersonalInfoForm from './PersonalInfoForm';
import PlanSelectionForm from './PlanSelectionForm';
import AddOnsForm from './AddOnsForm';
import ConfirmationForm from './ConfirmationForm';

export default function FormContent({ index }) {
  const FORMS = [
    <PersonalInfoForm />,
    <PlanSelectionForm />,
    <AddOnsForm />,
    <ConfirmationForm />,
  ];

  return (
    <div>
      {FORMS[index]}
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  );
}
