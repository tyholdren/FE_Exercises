export class FAQ {
  constructor(data) {
    this.data = data;
    this.activeContent = false;
  }

  render() {
    const faqContainer = document.createElement('div');
    faqContainer.id = 'faq-container';

    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const question = document.createElement('div');
    question.classList.add('question');
    question.textContent = this.data.question;

    const expandButton = document.createElement('span');
    expandButton.classList.add('expand-button');
    expandButton.textContent = ' + ';
    question.appendChild(expandButton);

    const answer = document.createElement('div');
    answer.classList.add('answer');
    answer.style.display = 'none';
    answer.textContent = this.data.answer;

    faqContainer.appendChild(question);
    faqContainer.appendChild(answer);

    question.addEventListener('click', () => {
      if (this.activeContent === false) {
        this.activeContent = true;
        answer.style.display = 'block';
      } else {
        this.activeContent = false;
        answer.style.display = 'none';
      }
    });

    question.addEventListener('mouseover', () => {
      question.style.cursor = 'pointer';
    });

    return faqContainer;
  }
}
