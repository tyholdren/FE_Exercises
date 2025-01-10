import { MONTHS, DAY_COUNT } from './constants.js';
import { Week } from './Week.js';

export default class Calendar {
  constructor() {
    this.visibleWeeks = 5;
  }

  render() {
    const fragment = document.createDocumentFragment();
    this.visibleWeeks.forEach(week => {
      const week = new Week().render();
      fragment.append(week);
    });
    return fragment;
  }
}
