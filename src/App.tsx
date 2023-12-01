import React, { useState, FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Wizard, StyleProvider, trackEvent, track } from 'losen';
import data from './api/bus-tilbygg';
import dataExport from './exports/data-export';
import Intro from './pages/Intro';
import { store, persistor } from './store';

const trackIntro = () => {
  track(data.meta.name, 'intro', 'Bygg uten å søke - tilbygg');
};

interface AppProps {
  translations?: Record<string, any>;
}

const App: FC<AppProps> = ({ translations = {} }) => {
  const [intro, setIntro] = useState(true);

  const closeIntro = () => {
    setIntro(false);
    window.scrollTo(0, 0);
    trackEvent('Close intro');
  };

  const showIntro = () => {
    setIntro(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (intro) {
      trackIntro();
    }
  }, [intro]);

  if (intro) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleProvider>
            <Intro close={closeIntro} />
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wizard
          wizard={data}
          exports={{ dataExport }}
          translations={translations}
          showIntro={showIntro}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
