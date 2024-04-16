export default function AddOnsForm() {
  const ADD_ONS = [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },
    {
      id: 3,
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
    },
  ];

  return (
    <article>
      <header>
        <h2>Pick add-ons</h2>
        <h5>Add-ons help enhance your gaming experience.</h5>
      </header>
      <section>
        <div className="form3-body-container">
          {ADD_ONS.map(({ id, title, description, price }) => {
            return (
              <div key={id} className="form3-content">
                <label>
                  <input type="checkbox" />
                  <span>{title}</span>
                </label>
                <p>{description}</p>
                <span>{price}</span>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
