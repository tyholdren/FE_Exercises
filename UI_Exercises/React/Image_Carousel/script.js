class Carousel {
  constructor() {
    this.images = [];
    this.index = 0;
  }

  initializeCarousel() {
    const images = document.querySelectorAll('img');
    images.forEach((image, index) => {
      image.style.transform = `translateX(${index * 100}%)`;
      this.images.push(image);
    });

    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

    leftButton.addEventListener('click', () => this.scrollLeft());
    rightButton.addEventListener('click', () => this.scrollRight());

    window.requestAnimationFrame(() => {
      this.images.forEach(image => {
        image.style.transition = 'transform 0.5s ease-in-out';
      });
    });
  }

  updatePositions() {
    this.images.forEach((image, index) => {
      image.style.transform = `translate(${(index - this.index) * 100}%)`;
    });
  }

  scrollLeft() {
    if (this.index === 0) return;
    this.index = this.index - 1;
    this.updatePositions();
  }

  scrollRight() {
    if (this.index === this.images.length - 1) return;
    this.index = this.index + 1;
    this.updatePositions();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myCarousel = new Carousel();
  myCarousel.initializeCarousel();
});
