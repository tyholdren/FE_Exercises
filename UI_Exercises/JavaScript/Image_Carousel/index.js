class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    this.intervalId = null;
    this.images = [];
    this.index = 0;
  }

  async fetchImages() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log({ error });
    }
  }

  renderImages() {
    const imgEls = this.images.map(image => {
      const imgEl = document.createElement('img');
      imgEl.alt = 'carousel-image';
      imgEl.src = image;
      return imgEl;
    });

    this.appContainer.append(...imgEls);
    this.updatePositions();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.index += 1;
      this.updatePositions();
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  updatePositions() {
    const renderedImgs = document.querySelectorAll('img');
    renderedImgs.forEach((image, imageIndex) => {
      const offset = (imageIndex - this.index) * 100;
      image.style.transform = `translateX(${offset}%)`;
    });
  }

  async initialize() {
    const images = await this.fetchImages();
    images.data.children.forEach(child => {
      const thumbnail = child.data.thumbnail;
      this.images.push(thumbnail);
    });

    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');

    nextBtn.textContent = 'next';
    prevBtn.textContent = 'prev';

    nextBtn.className = 'next-btn';
    prevBtn.className = 'prev-btn';

    nextBtn.addEventListener('click', () => {
      this.index += 1;
      this.updatePositions();
    });

    prevBtn.addEventListener('click', () => {
      this.index -= 1;
      this.updatePositions();
    });

    this.renderImages();
    this.appContainer.append(prevBtn, nextBtn);

    this.appContainer.addEventListener('mouseenter', () =>
      this.startInterval()
    );
    this.appContainer.addEventListener('mouseleave', () => this.stopInterval());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  const myApp = new App();
  myApp.initialize();
});
