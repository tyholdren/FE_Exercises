import { Header } from './Header.js';
import { Calendar } from './Calendar.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app-container');
    this.headerContainer = document.getElementById('header-container');
    this.calendarContainer = document.getElementById('calendar-container');
  }

  init() {
    const header = new Header().render();
    const calendar = new Calendar().render();

    calendar.className = 'calendar';
    this.headerContainer.append(header);

    Array(35)
      .fill(null)
      .forEach(el => {
        const day = document.createElement('div');
        day.className = 'day';
        this.calendarContainer.append(day);
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calendarApp = new App();
  calendarApp.init();
});
