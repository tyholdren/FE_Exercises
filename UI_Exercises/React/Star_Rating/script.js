class StarRating {
  constructor() {
    this.stars = [];
    this.index = 0;
  }

  initializeStars() {
    const starContainer = document.getElementById('star-container');
    const starTemplate = document.getElementById('star-icon');

    for (let i = 0; i < 5; i += 1) {
      const curStar = starTemplate.cloneNode(true);
      curStar.id = parseInt(i);
      curStar.style.display = 'inline';
      curStar.addEventListener('mouseover', event => {
        this.updateIndex(event.target.id);
      });

      this.stars.push(curStar);
    }

    this.stars.forEach(star => {
      starContainer.appendChild(star);
    });
  }

  updateIndex(id) {
    this.index = parseInt(id);
    this.highlightStars();
  }

  highlightStars() {
    this.stars.forEach(star => {
      if (parseInt(star.id) <= this.index) {
        star.classList.add('star-icon-filled');
      } else {
        star.classList.remove('star-icon-filled');
      }
    });
  }

  onSelected() {}
}

document.addEventListener('DOMContentLoaded', () => {
  const myStarRating = new StarRating();
  myStarRating.initializeStars();
});
