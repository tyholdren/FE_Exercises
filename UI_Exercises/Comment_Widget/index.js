import PostFeed from './PostFeed.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const newPostFeed = new PostFeed();
  newPostFeed.initializeFeed();
});
