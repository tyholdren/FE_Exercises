import React from 'react';
import { connect } from 'react-redux';
import { toggleTab, toggleCreated } from './actions';
import './App.css';

const TABS = {
  javascript: {
    value: 'javascript',
    created: '2000',
    description:
      'A versatile, high-level programming language primarily used for creating interactive effects within web browsers, enhancing user interfaces and web applications,',
  },

  typescript: {
    value: 'typescript',
    created: '2010',
    description:
      'A superset of JavaScript that adds static types and advanced object-oriented features, designed to develop large-scale applications by providing enhanced code quality and readability,',
  },

  html: {
    value: 'html',
    created: '1970',
    description:
      'The standard markup language used to create and structure sections, paragraphs, and links on web pages, forming the building blocks of all websites',
  },
};

function App({ openTabs, toggleTab, displayCreated, toggleCreated }) {
  return (
    <div className="App">
      {Object.entries(TABS).map((el, index) => {
        const label = el[0];
        const { created, description } = el[1];

        return (
          <div key={label}>
            <button onClick={() => toggleTab(label)}>{label}</button>
            <button onClick={() => toggleCreated(label)}>
              Display Date Created
            </button>

            {displayCreated.includes(label) && <div>{created}</div>}
            {openTabs.includes(label) && <div>{description}</div>}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  const { tabs, created } = state;
  return {
    openTabs: tabs.openTabs,
    displayCreated: created.displayCreated,
  };
};

const mapDispatchToProps = { toggleTab, toggleCreated };

export default connect(mapStateToProps, mapDispatchToProps)(App);
