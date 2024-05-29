import { Question } from './Question.js';
import { Answer } from './Answer.js';

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
  constructor() {
    this.questions = [];
    this.answers = [];
  }

  initialize() {
    const faqContainer = document.getElementById('faq-container');

    FAQ_DATA.forEach(({ question, answer }, index) => {
      const curQuestion = new Question(question);
      const curAnswer = new Answer(answer);

      const renderedQuestion = curQuestion.render();
      const renderedAnswer = curAnswer.render();

      this.questions.push({ id: index, value: renderedQuestion });
      this.answers.push({ id: index, value: renderedAnswer });
    });
    const mergedData = [...this.questions, ...this.answers];

    mergedData.forEach(({ value }) => {
      faqContainer.appendChild(value);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded!');
  const myApp = new App();
  myApp.initialize();
});
