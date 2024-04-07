export default function Form3() {
  const FORM_3_CONTENT = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
    },
  ];

  return (
    <div>
      <div>
        <h2>Pick add-ons</h2>
        <h5>Add-ons help enhance your gaming experience.</h5>
      </div>
      <div className="form3-content-container">
        <div className="form3-body-container">
          {FORM_3_CONTENT.map(({ title, description, price }, index) => {
            return (
              <div key={index} className="form3-content">
                <input type="checkbox" />
                <div>
                  <div>{title}</div>
                  <div>{description}</div>
                </div>
                <div>
                  <div>{price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
