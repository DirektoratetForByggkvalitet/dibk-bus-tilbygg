import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('div[data-bind], #root');
let translations = JSON.parse(root.getAttribute('data-bind') || '{}');

translations = Object.keys(translations).reduce((res, id) => {
  const { title: heading, ...rest } = translations[id];

  return {
    ...res,
    [id]: {
      heading,
      ...rest,
    },
  };
}, {});

ReactDOM.render(<App translations={translations} />, root); /* eslint no-undef: 0 */
if (window.location.hostname === 'localhost') {
  registerServiceWorker();
}
