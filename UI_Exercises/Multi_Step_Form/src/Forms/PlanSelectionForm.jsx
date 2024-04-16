export default function PlanSelectionForm() {
  const PLANS = [
    { id: 1, icon: 'icon 1', title: 'Arcade', price: '$9/mo' },
    { id: 2, icon: 'icon 2', title: 'Advanced', price: '$12/mo' },
    { id: 3, icon: 'icon 3', title: 'Pro', price: '$15/mo' },
  ];

  return (
    <articls>
      <header>
        <h2>Select Your Plan</h2>
        <h5>You have the option of monthly or yearly billing.</h5>
      </header>
      <section className="form2-content-container">
        <div className="form2-body-container">
          {PLANS.map(({ id, icon, title, price }) => {
            return (
              <div key={id} className="form2-content">
                <div>{icon}</div>
                <div>
                  <strong>{title}</strong>
                  <p>{price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <footer className="form2-footer-container">
          <span>Monthly</span>
          <span> - icon - </span>
          <span>Yearly</span>
        </footer>
      </section>
    </articls>
  );
}
