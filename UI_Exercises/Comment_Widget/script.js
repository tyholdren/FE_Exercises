// allow other users to add comments to this specific post

class PostFeed {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.postInput = document.getElementById('post-input');
    this.postsContainer = document.getElementById('posts-container');
    this.postIndex = 0;
  }

  initializeFeed() {
    this.appContainer.addEventListener('click', event => {
      const textContent = event.target.textContent;
      const idString = event.target.id;
      const id = idString.charAt(idString.length - 1);

      if (idString === 'add-post-button') {
        const postContent = this.postInput.value;
        if (postContent) {
          this.addPost(postContent);
        }
      } else if (textContent === 'delete') {
        this.deletePost(event);
      } else if (textContent === 'edit') {
        this.toggleModal(true, id);
      } else if (textContent === 'save') {
        this.toggleModal(false, id, true);
      } else if (textContent === 'cancel') {
        this.toggleModal(false, id, false);
      }
    });
  }

  addPost(postContent) {
    const newPost = document.createElement('div');
    newPost.id = `post-${this.postIndex}`;
    newPost.textContent = postContent;
    newPost.setAttribute('class', 'post-content');

    const replyButton = document.createElement('button');
    replyButton.textContent = 'reply';
    replyButton.setAttribute('class', 'reply-button');

    const deleteButton = document.createElement('button');
    deleteButton.id = `delete-button-${this.postIndex}`;
    deleteButton.textContent = 'delete';

    const editButton = document.createElement('button');
    editButton.id = `edit-button-${this.postIndex}`;
    editButton.textContent = 'edit';

    const postContainer = document.createElement('div');
    postContainer.setAttribute('class', 'post-container');

    const editModal = document.createElement('div');
    const editInput = document.createElement('input');
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    editInput.id = `edit-input-${this.postIndex}`;

    saveButton.textContent = 'save';
    cancelButton.textContent = 'cancel';
    saveButton.id = `save-button-${this.postIndex}`;
    cancelButton.id = `cancel-button-${this.postIndex}`;

    editModal.appendChild(editInput);
    editModal.appendChild(saveButton);
    editModal.appendChild(cancelButton);
    editModal.setAttribute('hidden', true);
    editModal.id = `edit-modal-${this.postIndex}`;

    postContainer.appendChild(newPost);
    postContainer.appendChild(deleteButton);
    postContainer.appendChild(editButton);
    postContainer.appendChild(replyButton);
    postContainer.appendChild(editModal);

    this.postsContainer.appendChild(postContainer);
    this.postIndex += 1;
    this.postInput.value = '';
  }

  deletePost(event) {
    const parent = event.target.parentNode;
    parent.remove();
  }

  toggleModal(showModal, id, save) {
    const editModalId = `edit-modal-${id}`;
    const editInputId = `edit-input-${id}`;

    const editModal = document.getElementById(editModalId);
    const editInput = document.getElementById(editInputId);
    const post = document.getElementById(`post-${id}`);

    if (save && editInput.value) {
      post.textContent = editInput.value;
    }

    showModal ? (editModal.hidden = false) : (editModal.hidden = true);
    editInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const newPostFeed = new PostFeed();
  newPostFeed.initializeFeed();
});
