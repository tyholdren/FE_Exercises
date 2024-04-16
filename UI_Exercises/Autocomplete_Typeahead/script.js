class Countries {
  constructor() {
    this.allResults = [];
    this.filteredResults = [];
    this.searchSuggestions = document.getElementById('search-suggestions');
    this.selectedResultValue = document.getElementById('selected-result-value');
    this.EMPTY_STRING = '';
  }

  initializeCountries() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', event => {
      if (event.target.value.length === 0) {
        this.searchSuggestions.textContent = this.EMPTY_STRING;
        this.selectedResultValue.innerHTML = this.EMPTY_STRING;
      } else {
        this.filterResults(event.target.value);
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Tab') {
        event.preventDefault();
        this.selectedResultValue.textContent = this.EMPTY_STRING;
        this.selectedResultValue.appendChild(this.searchSuggestions.firstChild);
        this.searchSuggestions.textContent = this.EMPTY_STRING;
      }
    });

    this.fetchAllResults();
  }

  async fetchAllResults() {
    try {
      const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await todos.json();
      this.allResults = data.map(({ title }) => {
        return title;
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  filterResults(input) {
    this.searchSuggestions.textContent = this.EMPTY_STRING;
    const value = input.toLowerCase();

    this.filteredResults = this.allResults.filter(todo => {
      let curResult = todo.slice(0, value.length);
      if (curResult.toLowerCase().includes(value)) {
        const para = document.createElement('p');
        para.textContent = todo;
        this.searchSuggestions.appendChild(para);
        return this.searchSuggestions;
      }
      return;
    });
    if (this.searchSuggestions.children.length) {
      this.searchSuggestions.firstChild.style.backgroundColor = 'yellow';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const countriesInstance = new Countries();
  countriesInstance.initializeCountries();
});
