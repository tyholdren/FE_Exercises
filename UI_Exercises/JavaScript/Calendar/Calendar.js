import { MONTHS, DAY_COUNT } from './constants.js';
import { Week } from './Week.js';

export class Calendar {
  constructor() {
    this.visibleWeeks = Array(5).fill(null);
  }

  render() {
    const fragment = document.createDocumentFragment();
    this.visibleWeeks.forEach(_ => {
      const curWeek = new Week().render();
      fragment.append(curWeek);
    });
    return fragment;
  }
}
