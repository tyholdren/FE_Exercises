export class Row {
  constructor(index, { task, status, difficulty, email, date }) {
    this.index = index;
    this.task = task;
    this.status = status;
    this.difficulty = difficulty;
    this.email = email;
    this.date = date;
  }

  render() {
    const $row = document.createElement('tr');
    $row.id = `row_${this.index}`;

    const $taskCell = document.createElement('td');
    $taskCell.id = `task-cell_${this.index}`;
    const $taskValue = document.createElement('div');
    $taskValue.textContent = this.task;
    $taskValue.id = `task-value_${this.index}`;
    $taskCell.append($taskValue);

    const $statusCell = document.createElement('td');
    const $statusValue = document.createElement('div');
    $statusValue.id = `status-value_${this.index}`;
    $statusValue.textContent = this.status;
    $statusCell.append($statusValue);

    const $difficultyCell = document.createElement('td');
    const $difficultyValue = document.createElement('div');
    $difficultyValue.textContent = this.difficulty;
    $difficultyValue.id = `difficulty-value_${this.index}`;

    $difficultyCell.append($difficultyValue);

    const $emailCell = document.createElement('td');
    const $emailValue = document.createElement('div');
    $emailValue.textContent = this.email;
    $emailValue.id = `email-value_${this.index}`;
    $emailCell.append($emailValue);

    const $dateCell = document.createElement('td');
    const $dateValue = document.createElement('div');
    $dateValue.textContent = this.date;
    $dateValue.id = `date-value_${this.index}`;

    $dateCell.append($dateValue);

    const $actionsCell = document.createElement('td');
    const $saveBtn = document.createElement('button');
    $saveBtn.textContent = 'save';
    $saveBtn.id = `save-btn_${this.index}`;

    const $deleteBtn = document.createElement('button');
    $deleteBtn.textContent = 'delete';
    $deleteBtn.id = `delete-btn_${this.index}`;

    const $editBtn = document.createElement('button');
    $editBtn.textContent = 'edit';
    $editBtn.id = `edit-btn_${this.index}`;

    $actionsCell.append($saveBtn, $deleteBtn, $editBtn);

    $row.append(
      $taskCell,
      $statusCell,
      $difficultyCell,
      $emailCell,
      $dateCell,
      $actionsCell
    );
    console.log($row);
    return $row;
  }
}
