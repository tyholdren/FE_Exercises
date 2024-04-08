export default function PersonalInfoForm() {
  const FIELDS = [
    {
      htmlFor: 'name-input',
      label: 'Name',
      id: 'name-input',
      name: 'name-input',
      type: 'text',
      placeholder: 'enter name',
    },
    {
      htmlFor: 'email-input',
      label: 'Email',
      id: 'email-input',
      name: 'email-input',
      type: 'email',
      placeholder: 'enter email',
    },
    {
      htmlFor: 'phone-input',
      label: 'Phone Number',
      id: 'phone-input',
      name: 'phone-input',
      type: 'text',
      placeholder: 'enter phone number',
    },
  ];

  return (
    <div>
      <div>
        <h2>Personal Info</h2>
        <h5>Please provide your name, email address, and phone number.</h5>
      </div>
      {FIELDS.map(({ htmlFor, label, id, name, type, placeholder }, index) => {
        return (
          <div key={id}>
            <label htmlFor={htmlFor}>{label}</label>
            <input id={id} name={name} type={type} placeholder={placeholder} />
          </div>
        );
      })}
    </div>
  );
}
