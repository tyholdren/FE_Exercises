// Don't worry about changing these regular expressions
const EMAIL_REGEX = /^\w+@\w+\.\w+$/;
const NAME_REGEX = /^\w{2,}$/; // Use for first and last name

// Your code goes here. Feel free to use, modify, or delete the following sample code:
document.querySelectorAll('table button').forEach(buttonEl => {
  buttonEl.addEventListener('click', () => {
    alert('Table button clicked!');
  });
});

document.forms[0].addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted!');
});

class Row {
  constructor() {}

  render() {
    const btn = document.createElement('button');
    btn.textContent = 'btn';
  }
}
