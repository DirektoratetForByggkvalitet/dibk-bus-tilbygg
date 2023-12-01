import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('div[data-bind], #root');
if (!root) {
  throw new Error('Root element not found');
}
let translations = JSON.parse(root.getAttribute('data-bind') || '{}');

translations = Object.keys(translations).reduce((res, id) => {
  const { title: heading, ...rest } = translations[id];

  if (!heading) return res;

  return {
    ...res,
    [id]: {
      heading,
      ...rest,
    },
  };
}, {});

createRoot(root).render(<App translations={translations} />);

if (window.location.hostname === 'localhost') {
  registerServiceWorker();
}
