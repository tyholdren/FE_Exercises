import { Header } from './Header.js';
import { Calendar } from './Calendar.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
  }

  init() {
    const header = new Header.render();
    const calendar = new Calendar.render();

    this.appContainer.append(header, calendar);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calendarApp = new App();
  calendarApp.init();
});
