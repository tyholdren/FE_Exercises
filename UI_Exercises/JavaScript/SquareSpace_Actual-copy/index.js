class Task {
  constructor(index, newTask) {
    this.newTask = newTask;
    this.index = index;
  }

  render() {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.id = `task-container_${this.index}`;

    const task = document.createElement('div');
    task.id = `task_${this.index}`;
    task.textContent = this.newTask;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = `delete-btn_${this.index}`;
    deleteBtn.textContent = 'delete';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.id = `edit-btn_${this.index}`;

    taskContainer.append(task, deleteBtn, editBtn);
    return taskContainer;
  }
}

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.form = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.editModal = document.getElementById('edit-task-form');
    this.editInput = document.getElementById('edit-task-input');
    this.cancelBtn = document.getElementById('cancel-btn');
    this.index = 0;
    this.editingId = null;
    this.tasks = new Map();
  }

  editTask(taskId) {
    this.editModal.style.visibility = 'visible';
    const taskValue = this.tasks.get(taskId);
    this.editInput.placeholder = taskValue;
  }

  updateTask(taskId) {
    if (this.editInput.value === '') {
      return;
    }
    const newTask = this.editInput.value;
    this.tasks.set(taskId, newTask);
    document.getElementById(`task_${taskId}`).textContent = newTask;
    this.editingId = null;
    this.editInput.placeholder = '';
    this.editModal.reset();
    this.editModal.style.visibility = 'hidden';
  }

  cancelUpdate() {
    this.editingId = null;
    this.editInput.placeholder = '';
    this.editModal.reset();
    this.editModal.style.visibility = 'hidden';
  }

  render() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.tasks.set(this.index, this.taskInput.value);
      const newTask = new Task(this.index, this.taskInput.value).render();
      this.index += 1;
      this.appContainer.append(newTask);
      this.form.reset();
    });

    this.editModal.addEventListener('submit', event => {
      event.preventDefault();
      this.updateTask(this.editingId);
    });

    this.cancelBtn.addEventListener('click', event => {
      event.preventDefault();
      this.cancelUpdate();
    });

    this.appContainer.addEventListener('click', event => {
      const { textContent, id } = event.target;
      const idNumber = parseInt(id.split('_')[1]);

      if (textContent === 'delete') {
        const taskToDelete = document.getElementById(
          `task-container_${idNumber}`
        );
        taskToDelete.parentNode.removeChild(taskToDelete);
        this.tasks.delete(idNumber);
      } else if (textContent === 'edit') {
        this.editingId = idNumber;
        this.editTask(idNumber);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  const newApp = new App();
  newApp.render();
});
