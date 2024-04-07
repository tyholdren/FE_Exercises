export default function Form4() {
  return (
    <div>
      <header>
        <h2>Finishing Up</h2>
        <h5>Double check everything looks ok before confirming.</h5>
      </header>
      <div>
        <section className="form4-body-container">
          <section className="form4-plan-container">
            <div className="form4-section-1">
              <span>Arcade (Monthly)</span>
              <span>Change</span>
              <div>
                <span>$9/mo</span>
              </div>
            </div>
            <div className="form4-section-2">
              <div className="form4-section-2-sub-section">
                <span>Online service</span>
                <span>+$9/mo</span>
              </div>
              <div className="form4-section-2-sub-section">
                <span>Larger storage</span>
                <span>+$1/mo</span>
              </div>
            </div>
          </section>
          <div className="form4-section-2-sub-section">
            <span>Total (per month)</span>
            <span>+$2/mo</span>
          </div>
        </section>
      </div>
    </div>
  );
}
