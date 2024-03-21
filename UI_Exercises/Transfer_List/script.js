class TransferList {
  constructor() {
    this.toMoveLeft = new Set();
    this.toMoveRight = new Set();

    this.leftState = new Set();
    this.rightState = new Set();

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
      this.rightState.add(item);
      this.rightContainer.appendChild(item);
    });

    this.moveAllLeftButton.addEventListener('click', () => this.moveAllLeft());
    this.moveAllRightButton.addEventListener('click', () =>
      this.moveAllRight()
    );

    const transferList = document.getElementById('transfer-list-container');
    transferList.addEventListener('click', event => {
      if (event.target.tagName === 'INPUT') {
        if (this.leftState.has(event.target.parentNode)) {
          if (event.target.checked === true) {
            this.toMoveRight.add(event.target.parentNode);
          } else {
            this.toMoveRight.delete(event.target.parentNode);
          }
        } else if (this.rightState.has(event.target.parentNode)) {
          if (event.target.checked === true) {
            this.toMoveLeft.add(event.target.parentNode);
          } else {
            this.toMoveLeft.add(event.target.parentNode);
          }
        }
        console.log('left state', this.leftState);
        console.log('right state', this.rightState);
      }
    });
  }

  moveAllLeft() {
    const items = Array.from(document.getElementsByClassName('transfer-item'));
    this.rightContainer.textContent = '';
    this.rightState = new Set();
    items.forEach(item => {
      this.leftState.add(item);
      this.leftContainer.appendChild(item);
    });
  }

  moveAllRight() {
    const items = Array.from(document.getElementsByClassName('transfer-item'));
    this.leftContainer.textContent = '';
    this.leftState = new Set();
    items.forEach(item => {
      this.rightState.add(item);
      this.rightContainer.appendChild(item);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const MyTransferList = new TransferList();
  MyTransferList.initializeList();
});
