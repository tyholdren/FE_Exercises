/*
create an editable table

features:
MVP:
 - add a new row
 - add a new column
 - edit a specific row, any column
 - delete a row
 - be able to select multiple rows to delete
 - implement a search functionality to search for specific entries
 - save certain rows for saved views / preferences
 - sort table based on different criteria:
  - date
 most recently added (timestamp)
 last recently added
 - filter rows based on certain criteria:
  - specific dates
  - status
  - etc..

 stretch:
 - move row to the top or the bottom

  sort on ascending vs descending based on each column
  i.e. if we sort on names we sort ascending or descending
  alphabetically, if we sort on dates we sort on earliest date or
  latest date and this is ascending, descending then back to normal state

  validation:
  has a user entered data that isn't correct? for example, if they enter an email
  it should be a valid email address, if there's no "@" then no, if enter a phone
  number and a character is not a number it should give an error

  toast notifications to show errors?

  how to make accessible?
  aria roles for screen readers
  alt
  semantic html
  high contrast for certain alerts

  add certain tags to columns
  status column
  columns:
  status
  difficulty
  email address
  date added (auto generated)
  name "tyler" "brian"
  completed (checkbox)

*/

import { Row } from './Row.js';

export default class App {
  constructor() {
    this.tableBody = document.getElementById('table-body');
    this.index = 0;
    this.currentEditingId = null;
    this.rowsMap = new Map();
    this.editModal = document.getElementById('add-task-modal');
    this.modalHeader = document.getElementById('task-modal-header');
    this.taskValue = document.getElementById('task-modal__task-field');
    this.statusValue = document.getElementById('task-modal__status-field');
    this.difficultyValue = document.getElementById(
      'task-modal__difficulty-field'
    );
    this.emailValue = document.getElementById('task-modal__email-field');
    this.dateValue = document.getElementById('task-modal__date-field');
  }

  addRow() {
    this.rowsMap.set(this.index, {
      task: this.taskValue.value,
      status: this.statusValue.value,
      difficulty: this.difficultyValue.value,
      email: this.emailValue.value,
      date: this.dateValue.value,
    });

    const $row = new Row(this.index, this.rowsMap.get(this.index)).render();

    this.index += 1;
    this.tableBody.append($row);
  }

  deleteRow(id) {
    this.rowsMap.delete(id);
    const $rowToDelete = document.getElementById(`row_${id}`);
    if ($rowToDelete) {
      this.tableBody.removeChild($rowToDelete);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.currentEditingId !== null) {
      this.updateRow(this.currentEditingId);
    } else {
      this.addRow();
    }
    this.clearForm();
  }

  updateRow(id) {
    this.rowsMap.set(parseInt(id), {
      task: this.taskValue.value,
      status: this.statusValue.value,
      difficulty: this.difficultyValue.value,
      email: this.emailValue.value,
      date: this.dateValue.value,
    });

    const { task, status, difficulty, email, date } = this.rowsMap.get(
      parseInt(id)
    );

    document.getElementById(`task-value_${id}`).textContent = task;
    document.getElementById(`status-value_${id}`).textContent = status;
    document.getElementById(`difficulty-value_${id}`).textContent = difficulty;
    document.getElementById(`email-value_${id}`).textContent = email;
    document.getElementById(`date-value_${id}`).textContent = date;

    this.clearForm();
    this.currentEditingId = null;
    this.modalHeader = 'Add a task';
  }

  editRow(id) {
    const { task, status, difficulty, email, date } = this.rowsMap.get(
      parseInt(id)
    );
    this.modalHeader.textContent = 'edit exg task';

    this.taskValue.value = task;
    this.statusValue.value = status;
    this.difficultyValue.value = difficulty;
    this.emailValue.value = email;
    this.dateValue.value = date;
    this.currentEditingId = parseInt(id);
  }

  clearForm() {
    this.editModal.reset();
  }

  render() {
    this.editModal.addEventListener('submit', event => {
      this.handleSubmit(event);
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
      this.clearForm();
    });

    this.tableBody.addEventListener('click', event => {
      const id = event.target.id.split('_')[1];
      const buttonText = event.target.textContent;
      if (buttonText === 'delete') {
        this.deleteRow(id);
      } else if (buttonText === 'save') {
        this.saveRow(id);
      } else if (buttonText === 'edit') {
        this.editRow(id);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const newApp = new App();
  newApp.render();
});
