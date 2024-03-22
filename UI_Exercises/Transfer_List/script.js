class TransferList {
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
    const items = Array.from(document.getElementsByClassName('transfer-item'));
    items.forEach(item => {
      this.rightContainer.appendChild(item);
    });

    this.moveLeftButton.addEventListener('click', () => {
      this.moveLeft();
    });

    this.moveRightButton.addEventListener('click', () => {
      this.moveRight();
    });

    this.moveAllLeftButton.addEventListener('click', () => this.moveAllLeft());
    this.moveAllRightButton.addEventListener('click', () =>
      this.moveAllRight()
    );

    const transferList = document.getElementById('transfer-list-container');
    transferList.addEventListener('click', event => {
      if (event.target.tagName === 'INPUT') {
        if (event.target.parentNode.parentNode.id === 'left-container') {
          if (event.target.checked === true) {
            this.toMoveRight.add(event.target.parentNode);
          } else {
            this.toMoveRight.delete(event.target.parentNode);
          }
        } else if (
          event.target.parentNode.parentNode.id === 'right-container'
        ) {
          if (event.target.checked === true) {
            this.toMoveLeft.add(event.target.parentNode);
          } else {
            this.toMoveLeft.add(event.target.parentNode);
          }
        }
      }
    });
  }

  moveLeft() {
    const items = Array.from(this.toMoveLeft);
    items.forEach(item => {
      const inputBox = item.querySelector('input');
      inputBox.checked = false;
      this.leftContainer.appendChild(item);
    });
    this.toMoveLeft = new Set();
  }

  moveRight() {
    const items = Array.from(this.toMoveRight);
    items.forEach(item => {
      const inputBox = item.querySelector('input');
      inputBox.checked = false;
      this.rightContainer.appendChild(item);
    });
    this.toMoveRight = new Set();
  }

  moveAllLeft() {
    const items = Array.from(document.getElementsByClassName('transfer-item'));
    this.rightContainer.textContent = '';
    items.forEach(item => {
      this.leftContainer.appendChild(item);
    });
  }

  moveAllRight() {
    const items = Array.from(document.getElementsByClassName('transfer-item'));
    this.leftContainer.textContent = '';
    items.forEach(item => {
      this.rightContainer.appendChild(item);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const MyTransferList = new TransferList();
  MyTransferList.initializeList();
});
