import { MOCK_DATA } from './mock_data.js';
export class App {
  constructor() {
    this.searchBar = document.getElementById('searchBar');
    this.resultsContainer = document.getElementById('results-container');
    this.pageNumber = document.getElementById('page-number');
    this.nextBtn = document.getElementById('next-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.results = [];
    this.totalPages = 0;
    this.size = 5;
    this.page = 1;
    this.searchValue = '';
  }

  handleNewPage(increment) {
    if (increment) {
      this.page++;
    } else {
      this.page--;
    }
    this.prevBtn.disabled = this.page === 1;
    this.nextBtn.disabled = this.page === this.totalPages;
    this.pageNumber.innerHTML = `Page ${this.page}`;
    this.resultsContainer.innerHTML = '';
    this.renderData();
  }

  MOCK_FETCH() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: () => Promise.resolve(MOCK_DATA),
        });
      }, 1000);
    });
  }

  async fetchData() {
    try {
      const res = await this.MOCK_FETCH();
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }

  renderData() {
    const fragment = document.createDocumentFragment();

    const start = (this.page - 1) * this.size;
    const end = start + this.size;

    const currentPage = this.results.slice(start, end);
    const processedData = this.highlight(currentPage);
    processedData.forEach(el => {
      const div = document.createElement('div');
      div.innerHTML = el.description;
      fragment.append(div);
    });

    this.resultsContainer.innerHTML = '';
    this.resultsContainer.append(fragment);
  }

  highlight(data) {
    const query = this.searchValue.trim();
    if (!query) {
      return data;
    }

    return data.map(item => {
      const regex = new RegExp(`(${query})`, 'gi');
      const highlightedDescription = item.description.replace(
        regex,
        '<mark>$1</mark>'
      );
      return { ...item, description: highlightedDescription };
    });
  }

  async init() {
    this.resultsContainer.textContent = 'Loading Results...';
    const data = await this.fetchData();
    this.resultsContainer.textContent = '';
    this.results = data ? data : [];
    this.totalPages = Math.ceil(data.length / this.size);
    this.renderData();
    this.pageNumber.innerHTML = `Page ${this.page}`;
    this.nextBtn.addEventListener('click', () => {
      this.handleNewPage(true);
    });

    this.prevBtn.addEventListener('click', () => {
      this.handleNewPage(false);
    });
    this.prevBtn.disabled = this.page === 1;
    this.searchBar.addEventListener('input', e => {
      this.searchValue = e.target.value;
      this.renderData(this.results);
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.init();
});
