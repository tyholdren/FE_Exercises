import { Header } from './Header.js';
import { Calendar } from './Calendar.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.headerContainer = document.getElementById('header-container');
    this.calendarContainer = document.getElementById('calendar-container');
  }

  init() {
    console.log('app is running');
    const header = new Header().render();
    const calendar = new Calendar().render();
    this.headerContainer.append(header);
    this.calendarContainer.append(calendar);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calendarApp = new App();
  calendarApp.init();
});
