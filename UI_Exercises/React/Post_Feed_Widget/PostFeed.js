// allow other users to add comments to this specific post
import Button from './Button.js';
import EditModal from './EditModal.js';

export default class PostFeed {
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
      } else if (textContent) {
        const selectedAction = this.getAction(textContent, event, id);
        selectedAction(event, id);
      }
    });
  }

  getAction(key) {
    const actions = {
      delete: (event, _) => this.deletePost(event),
      edit: (_, id) => this.toggleModal(true, id),
      save: (_, id) => this.toggleModal(false, id, true),
      cancel: (_, id) => this.toggleModal(false, id, false),
    };
    return actions[key];
  }

  addPost(postContent) {
    const newPost = document.createElement('div');
    const postIndex = this.postIndex;
    newPost.id = `post-${postIndex}`;
    newPost.textContent = postContent;
    newPost.setAttribute('class', 'post-content');

    const replyButton = new Button({
      textContent: 'reply',
      className: 'reply-button',
    });

    const deleteButton = new Button({
      textContent: 'delete',
      id: `delete-button-${postIndex}`,
      onClick: event => {
        this.deletePost(event);
      },
    });

    const editButton = new Button({
      textContent: 'edit',
      id: `edit-button-${postIndex}`,
      onClick: event => {
        this.toggleModal(true, postIndex);
      },
    });

    const postContainer = document.createElement('div');
    postContainer.setAttribute('class', 'post-container');

    const editModal = new EditModal({
      id: postIndex,
      onClick: this.toggleModal,
    });

    postContainer.appendChild(newPost);
    postContainer.appendChild(deleteButton.getElement());
    postContainer.appendChild(editButton.getElement());
    postContainer.appendChild(replyButton.getElement());
    postContainer.appendChild(editModal.getElement());

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
