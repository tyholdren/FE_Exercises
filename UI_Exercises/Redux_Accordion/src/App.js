import React from 'react';
import { connect } from 'react-redux';
import { toggleTab } from './actions';
import './App.css';

const TABS = {
  javascript: {
    value: 'javascript',
    description:
      'A versatile, high-level programming language primarily used for creating interactive effects within web browsers, enhancing user interfaces and web applications,',
  },

  typescript: {
    value: 'typescript',
    description:
      'A superset of JavaScript that adds static types and advanced object-oriented features, designed to develop large-scale applications by providing enhanced code quality and readability,',
  },

  html: {
    value: 'html',
    description:
      'The standard markup language used to create and structure sections, paragraphs, and links on web pages, forming the building blocks of all websites',
  },
};

function App({ openTabs, toggleTab }) {
  return (
    <div className="App">
      {Object.entries(TABS).map((el, index) => {
        const label = el[0];
        const { description } = el[1];

        return (
          <div key={label}>
            <button onClick={() => toggleTab(label)}>{label}</button>
            {openTabs.includes(label) && <div>{description}</div>}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  openTabs: state.tabs.openTabs,
});

const mapDispatchToProps = { toggleTab };

export default connect(mapStateToProps, mapDispatchToProps)(App);
