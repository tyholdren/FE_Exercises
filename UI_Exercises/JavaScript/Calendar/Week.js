import { DAY_COUNT } from './constants.js';
import { Day } from './Day.js';

export class Week {
  constructor() {
    this.daysInWeek = Array(7).fill(null);
  }

  render() {
    const fragment = document.createDocumentFragment();
    this.daysInWeek.forEach(_ => {
      const curDay = new Day().render();
      fragment.append(curDay);
    });
    return fragment;
  }
}
