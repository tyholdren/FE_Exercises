import { FAQ } from './FAQ.js';

const FAQ_DATA = [
  {
    question: 'How many bones does a cat have?',
    answer: 'A cat has 230 bones - 6 more than a human',
  },
  {
    question: 'How much do cats sleep?',
    answer: 'The average cat sleeps 12-16 hours per day',
  },
  {
    question: 'How long do cats live',
    answer:
      'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.',
  },
];

class App {
  constructor() {}

  initialize() {
    const faqContainer = document.getElementById('FAQ-container');
    faqContainer.id = 'faq-container';

    FAQ_DATA.forEach(item => {
      const faqComponent = new FAQ(item);
      const faqItem = faqComponent.render();

      faqContainer.appendChild(faqItem);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');
  const myApp = new App();
  myApp.initialize();
});
