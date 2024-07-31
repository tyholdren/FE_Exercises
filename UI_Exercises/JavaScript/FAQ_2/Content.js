export class Content {
  constructor(data) {
    this.data = data;
  }

  render() {
    const curContent = document.createElement('div');
    curContent.textContent = this.data;
    return curContent;
  }
}
