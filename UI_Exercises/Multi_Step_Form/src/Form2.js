export default function Form2() {
  const FORM_2_CONTENT = [
    { icon: 'icon 1', title: 'Arcade', price: '$9/mo' },
    { icon: 'icon 2', title: 'Advanced', price: '$12/mo' },
    { icon: 'icon 3', title: 'Pro', price: '$15/mo' },
  ];

  return (
    <div>
      <div>
        <h2>Select Your Plan</h2>
        <h5>You have the option of monthly or yearly billing.</h5>
      </div>
      <div className="form2-content-container">
        <div className="form2-body-container">
          {FORM_2_CONTENT.map(({ icon, title, price }, index) => {
            return (
              <div key={index} className="form2-content">
                <div>{icon}</div>
                <div>
                  <div>{title}</div>
                  <div>{price}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form2-footer-container">
          <span>Monthly</span>
          <span> - icon - </span>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
}
