export default function Form1() {
  return (
    <div>
      <div>
        <h2>Personal Info</h2>
        <h5>Please provide your name, email address, and phone number.</h5>
      </div>
      <div>
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          name="name-input"
          type="text"
          placeholder="enter name"
        />
      </div>
      <div>
        <label htmlFor="email-input">Email Address</label>
        <input
          id="email-input"
          name="email-input"
          type="email"
          placeholder="enter email"
        />
      </div>
      <div>
        <label htmlFor="phone-input">Phone Number</label>
        <input
          id="phone-input"
          name="phone-input"
          type="text"
          placeholder="enter phone number"
        />
      </div>
    </div>
  );
}
