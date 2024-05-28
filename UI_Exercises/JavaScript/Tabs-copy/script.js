class Tabs {
  constructor() {
    this.tabsContainer = document.getElementById('tabs-container');
    this.contentContainer = document.getElementById('content-container');

    this.tab1 = document.getElementById('tab-1');
    this.tab2 = document.getElementById('tab-2');
    this.tab3 = document.getElementById('tab-3');
    this.tab4 = document.getElementById('tab-4');

    this.tab1Content = document.getElementById('content-1');
    this.tab2Content = document.getElementById('content-2');
    this.tab3Content = document.getElementById('content-3');
    this.tab4Content = document.getElementById('content-4');

    this.activeContent = null;
  }

  initializeTabs() {
    this.tabsContainer.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        const idString = event.target.id;
        const id = idString.charAt(idString.length - 1);
        const activeTab = `content-${id}`;

        this.displayActiveTab(activeTab);
      }
    });
  }

  displayActiveTab(id) {
    if (this.activeContent) {
      this.activeContent.hidden = true;
    }
    this.activeContent = document.getElementById(id);
    this.activeContent.hidden = false;
  }

  initializeContent() {
    const NUMBERS = [1, 2, 3, 4];

    NUMBERS.forEach(num => {
      const div = document.createElement('div');
      div.id = `content-${num}`;
      div.hidden = true;
      div.className = 'tab-component';

      const h1 = document.createElement('h1');
      h1.textContent = `Hello from content ${num}`;

      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
      const strong = document.createElement('strong');

      strong.textContent = `Tab ${num} `;
      paragraph1.appendChild(strong);

      const content = document.createTextNode(`Lorem Ipsum is simply dummy text
      of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum`);

      paragraph2.appendChild(content);

      div.appendChild(h1);
      div.appendChild(paragraph1);
      div.appendChild(paragraph2);

      this.contentContainer.appendChild(div);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');
  const myTabs = new Tabs();
  myTabs.initializeTabs();
  myTabs.initializeContent();
  myTabs.displayActiveTab('content-1');
});
