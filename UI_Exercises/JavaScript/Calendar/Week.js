import { DAY_COUNT } from './constants.js';
import { Day } from 'Day.js';
export default class Week {
  constructor() {
    this.daysInWeek = 7;
  }

  render() {
    const fragment = document.createDocumentFragment();
    this.daysInWeek.forEach(day => {
      const day = new Day();
      fragment.append(day);
    });
    return fragment;
  }
}
