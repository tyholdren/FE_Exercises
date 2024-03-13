export default class Button {
  constructor({ textContent, id, onClick, className }) {
    this.button = document.createElement('button');
    this.button.id = id;
    this.button.textContent = textContent;
    this.button.addEventListener('click', onClick);
    if (this.className) {
      this.button.className = className;
    }
  }

  getElement() {
    return this.button;
  }
}
