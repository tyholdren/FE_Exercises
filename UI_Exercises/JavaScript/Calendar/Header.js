export class Header {
  constructor() {}

  render() {
    const header = document.createElement('span');
    header.textContent = 'HEADER';
    return header;
  }
}
