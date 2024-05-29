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
    this.faqContainer = document.getElementById('faq-container');
  }

  initialize() {
    FAQ_DATA.forEach(({ question, answer }, index) => {
      const curQuestion = new Question(question);
      const curAnswer = new Answer(answer);

      const renderedQuestion = curQuestion.render();
      const renderedAnswer = curAnswer.render();

      this.questions.push({ id: index, value: renderedQuestion });
      this.answers.push({ id: index, value: renderedAnswer, isActive: false });

      renderedQuestion.addEventListener('click', () =>
        this.toggleAnswer(index)
      );
    });

    this.questions.forEach(({ value }) => {
      this.faqContainer.appendChild(value);
    });

    this.answers.forEach(({ value }) => {
      this.faqContainer.appendChild(value);
    });
  }

  toggleAnswer(curIndex) {
    const newAnswers = [...this.answers];
    let curAnswer = newAnswers[curIndex];
    let { isActive } = curAnswer;

    curAnswer.isActive = !curAnswer.isActive;

    curAnswer.value.style.display = isActive === true ? 'block' : 'none';

    this.answers = newAnswers;
    this.answers.forEach(({ value }) => {
      this.faqContainer.appendChild(value);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded!');
  const myApp = new App();
  myApp.initialize();
});
