export const moveItem = (items, destination) => {
  items.forEach(item => {
    const inputBox = item.querySelector('input');
    inputBox.checked = false;
    destination.appendChild(item);
  });
};

export const moveAllItems = (items, destination) => {
  items.forEach(item => {
    destination.appendChild(item);
  });
};

export const placeInTempContainer = (event, toMoveLeft, toMoveRight) => {
  const parentContainer = event.target.parentNode.parentNode.id;
  const parentNode = event.target.parentNode;
  const isChecked = event.target.checked;

  if (parentContainer === 'left-container') {
    if (isChecked === true) {
      toMoveRight.add(parentNode);
    } else {
      toMoveRight.delete(parentNode);
    }
  } else if (parentContainer === 'right-container') {
    if (isChecked === true) {
      toMoveLeft.add(parentNode);
    } else {
      toMoveLeft.add(parentNode);
    }
  }
};

export const LANGUAGES = [
  {
    containerId: 'html-container',
    class: 'transfer-item',
    labelFor: 'html',
    labelValue: 'HTML',
    inputId: 'html',
  },
  {
    containerId: 'javascript-container',
    class: 'transfer-item',
    labelFor: 'javascript',
    labelValue: 'Javascript',
    inputId: 'javascript',
  },
  {
    containerId: 'css-container',
    class: 'transfer-item',
    labelFor: 'css',
    labelValue: 'CSS',
    inputId: 'css',
  },
  {
    containerId: 'typescript-container',
    class: 'transfer-item',
    labelFor: 'typescript',
    labelValue: 'TypeScript',
    inputId: 'typescript',
  },
  {
    containerId: 'react-container',
    class: 'transfer-item',
    labelFor: 'react',
    labelValue: 'React',
    inputId: 'react',
  },
  {
    containerId: 'angular-container',
    class: 'transfer-item',
    labelFor: 'angular',
    labelValue: 'Angular',
    inputId: 'angular',
  },
  {
    containerId: 'vue-container',
    class: 'transfer-item',
    labelFor: 'vue',
    labelValue: 'Vue',
    inputId: 'vue',
  },
  {
    containerId: 'svelte-container',
    class: 'transfer-item',
    labelFor: 'svelte',
    labelValue: 'Svelte',
    inputId: 'svelte',
  },
];
