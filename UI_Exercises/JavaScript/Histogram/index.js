import { MOCK_DATA } from './constants.js';

class App {
  constructor() {
    this.buckets = {};
    this.xValues = [];
    this.yValues = [];
    this.yMax = 0;

    this.appContainer = document.getElementById('app-container');
  }

  async init() {
    this.appContainer.className = 'app-container';
    this.buckets = await this.fetchData();
    this.xValues = this.getXValues();
    this.yMax = this.getYMax();
    this.yValues = this.getYValues();
    this.generateGraph();
  }

  async fetchData() {
    const data = await this.getData();
    return this.generateBuckets(data);
  }

  async getData() {
    const data = MOCK_DATA;
    return data
      .split('\n')
      .filter(Boolean)
      .map(el => +el);
  }

  generateBuckets(nums) {
    const obj = {};
    nums.forEach(num => {
      obj[num] ||= 0;
      obj[num] += 1;
    });
    return obj;
  }

  getYMax() {
    return Math.ceil(Math.max(...Object.values(this.buckets)) / 10) * 10;
  }

  getXValues() {
    let xMin = Math.min(...Object.keys(this.buckets));
    let xMax = Math.max(...Object.keys(this.buckets));
    const arr = [];

    while (xMin <= xMax) {
      arr.push(xMin);
      xMin += 1;
    }
    return arr;
  }

  getYValues() {
    let start = 0;
    const arr = [];
    while (start <= this.yMax) {
      arr.push(start);
      start += 5;
    }

    return arr;
  }

  generateGraph() {
    const yAxis = document.createElement('div');
    const xAxis = document.createElement('div');
    const bars = document.createElement('div');

    yAxis.className = 'y-axis';
    yAxis.style.height = `${this.yMax * 10}px`;
    xAxis.className = 'x-axis';
    bars.className = 'bars';

    const yContent = this.yValues.map((value, index) => {
      const el = document.createElement('div');
      el.textContent = value;
      el.style.marginBottom = index === 0 ? `12px` : '0';
      return el;
    });

    // const xContent = this.xValues.map(value => {
    //   const el = document.createElement('div');
    //   el.textContent = value;
    //   return el;
    // });

    const barsContent = Object.values(this.buckets).map((value, index) => {
      const barWrapper = document.createElement('div');
      const xValue = document.createElement('div');
      const bar = document.createElement('div');

      barWrapper.className = 'bar__wrapper';
      bar.className = 'bar__item';

      bar.style.height = `${value * 10}px`;
      xValue.textContent = this.xValues[index];

      barWrapper.append(bar, xValue);
      return barWrapper;
    });

    yAxis.append(...yContent);
    // xAxis.append(...xContent);
    bars.append(...barsContent);
    this.appContainer.append(yAxis, bars);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App();
  myApp.init();
});
