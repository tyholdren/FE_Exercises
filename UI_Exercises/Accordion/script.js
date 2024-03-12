class Tabs {
  constructor() {
    this.app = document.getElementById('app');
    this.tab1 = document.getElementById('tab-1');
    this.tab2 = document.getElementById('tab-2');
    this.tab3 = document.getElementById('tab-3');

    this.activeTabs = new Set();
  }

  initializeTabs() {
    this.app.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        const lastNumber = buttonId.charAt(buttonId.length - 1);
        const contentId = `content-${lastNumber}`;

        this.setActiveTabs(contentId);
      }
    });
  }

  setActiveTabs(id) {
    const updatedTabs = new Set(this.activeTabs);
    if (this.activeTabs.has(id)) {
      updatedTabs.delete(id);
      this.activeTabs = updatedTabs;
    } else {
      updatedTabs.add(id);
      this.activeTabs = updatedTabs;
    }
    this.displayActiveTabs();
    return;
  }

  displayActiveTabs() {
    const CONTENT = document.getElementsByClassName('content');

    for (let content of CONTENT) {
      const curContent = document.getElementById(content.id);
      if (curContent) {
        if (this.activeTabs.has(curContent.id)) {
          curContent.hidden = false;
        } else {
          curContent.hidden = true;
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myTabs = new Tabs();
  myTabs.initializeTabs();
  myTabs.setActiveTabs('content-1');
});
