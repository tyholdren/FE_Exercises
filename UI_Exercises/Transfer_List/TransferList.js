import {
  moveItem,
  moveAllItems,
  placeInTempContainer,
  LANGUAGES,
} from './utils.js';

export default class TransferList {
  constructor() {
    this.toMoveLeft = new Set();
    this.toMoveRight = new Set();

    this.moveLeftButton = document.getElementById('move-left');
    this.moveAllLeftButton = document.getElementById('move-all-left');
    this.moveRightButton = document.getElementById('move-right');
    this.moveAllRightButton = document.getElementById('move-all-right');
  }

  initializeList() {
    this.leftContainer = document.getElementById('left-container');
    this.rightContainer = document.getElementById('right-container');

    const items = LANGUAGES.map(language => {
      const containerDiv = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');

      containerDiv.id = language.containerId;
      containerDiv.classList.add(language.class);

      label.for = language.labelFor;
      label.textContent = language.labelValue;

      input.id = language.inputId;
      input.type = 'checkbox';

      containerDiv.appendChild(label);
      containerDiv.appendChild(input);

      return containerDiv;
    });

    items.forEach(item => {
      this.leftContainer.appendChild(item);
    });

    this.moveLeftButton.addEventListener('click', () => {
      moveItem(this.toMoveLeft, this.leftContainer);
      this.toMoveLeft = new Set();
    });

    this.moveRightButton.addEventListener('click', () => {
      moveItem(this.toMoveRight, this.rightContainer);
      this.toMoveRight = new Set();
    });

    this.moveAllLeftButton.addEventListener('click', () => {
      moveAllItems(items, this.leftContainer);
      this.rightContainer.textContent = '';
    });

    this.moveAllRightButton.addEventListener('click', () => {
      moveAllItems(items, this.rightContainer);
      this.leftContainer.textContent = '';
    });

    const transferList = document.getElementById('transfer-list-container');
    transferList.addEventListener('click', event => {
      if (event.target.tagName === 'INPUT') {
        placeInTempContainer(event, this.toMoveLeft, this.toMoveRight);
      }
    });
  }
}
