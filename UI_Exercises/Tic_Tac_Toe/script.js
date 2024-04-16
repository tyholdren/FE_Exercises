(function () {
  let count = 0;

  const tableContainer = document.getElementById('table-container');
  const board = document.createElement('table');

  board.setAttribute('id', 'board');
  board.classList.add('board');

  for (let i = 0; i < 3; i += 1) {
    const row = document.createElement('tr');
    row.classList.add('row');

    for (let k = 0; k < 3; k += 1) {
      const cell = document.createElement('td');
      const button = document.createElement('button');

      button.id = `cell-${i * 3 + k + 0}`;
      button.classList.add('cell');
      button.textContent = '*';

      cell.appendChild(button);
      row.appendChild(cell);
    }
    board.append(row);
  }
  tableContainer.append(board);

  const resetBoard = () => {
    const cells = [...document.getElementsByClassName('cell')];
    cells.forEach(cell => {
      cell.disabled = false;
      cell.textContent = '*';
    });
    count = 0;
  };

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () => resetBoard());

  const checkWinner = () => {
    const cells = [...document.getElementsByClassName('cell')];
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombos) {
      if (
        cells[a].textContent !== '*' &&
        cells[a].textContent === cells[b].textContent &&
        cells[b].textContent === cells[c].textContent
      ) {
        alert('we have a winner');
        resetBoard();
        break;
      }
    }
  };

  board.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      event.target.textContent = count % 2 === 0 ? 'X' : 'O';
      event.target.disabled = true;

      setTimeout(() => {
        checkWinner();
      }, 0);
      count += 1;
    }
  });
})();
