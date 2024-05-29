export class Question {
  constructor(data) {
    this.data = data;
  }

  render() {
    const question = document.createElement('div');
    question.textContent = this.data;
    return question;
  }
}
