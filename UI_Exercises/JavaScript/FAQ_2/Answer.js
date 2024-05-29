export class Answer {
  constructor(data) {
    this.data = data;
    // this.display = false;
  }

  render() {
    const answer = document.createElement('div');
    answer.textContent = this.data;
    return answer;
  }
}
