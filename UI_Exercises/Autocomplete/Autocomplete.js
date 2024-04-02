class Autocomplete {
  constructor() {
    this.results = [];
    this.searchResults = document.getElementById('search-results');
    this.searchInput = document.getElementById('search-input-box');
  }

  initialize() {
    this.searchInput.addEventListener('input', event => {
      if (event.target.value) {
        this.filterResults(event.target.value);
      } else {
        this.searchResults.textContent = '';
      }
    });

    const searchInputContainer = document.getElementById(
      'search-input-container'
    );

    searchInputContainer.addEventListener('click', event => {
      event.preventDefault();
      if (
        event.target.tagName === 'BUTTON' &&
        event.target.id !== 'search-button'
      ) {
        event.preventDefault();
        this.searchInput.value = event.target.innerHTML;
      }
    });

    const searchFormContainer = document.getElementById(
      'search-form-container'
    );

    searchFormContainer.addEventListener('submit', event => {
      event.preventDefault();
      console.log('submit event triggered');
    });

    this.fetchResults();
  }

  filterResults(value) {
    const searchInput = value.toLowerCase();
    const length = searchInput.length;

    this.searchResults.textContent = '';

    this.results.forEach(result => {
      const newResult = result.slice(0, length).toLowerCase();

      if (newResult === searchInput) {
        const curResult = document.createElement('button');
        curResult.textContent = result;
        this.searchResults.appendChild(curResult);
      }
    });
  }

  async fetchResults() {
    try {
      const results = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await results.json();
      data.forEach(({ title }) => {
        this.results.push(title);
      });
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myAutocomplete = new Autocomplete();
  myAutocomplete.initialize();
});
