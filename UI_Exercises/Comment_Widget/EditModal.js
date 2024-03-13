import Button from './Button.js';

export default class EditModal {
  constructor({ id, onClick }) {
    this.editModal = document.createElement('div');
    this.editInput = document.createElement('input');

    this.editModal.id = `edit-modal-${id}`;
    this.editInput.id = `edit-input-${id}`;

    this.editModal.setAttribute('hidden', true);

    this.saveButton = new Button({
      textContent: 'save',
      id: `save-button-${id}`,
      onClick: () => {
        onClick(false, id, true);
      },
    });

    this.cancelButton = new Button({
      textContent: 'cancel',
      id: `cancel-button-${id}`,
      onClick: () => {
        onClick(false, id, false);
      },
    });
  }

  initializeModal() {
    this.editModal.appendChild(this.editInput);
    this.editModal.appendChild(this.saveButton.getElement());
    this.editModal.appendChild(this.cancelButton.getElement());
  }

  getElement() {
    this.initializeModal();
    return this.editModal;
  }
}
