import { createStore, combineReducers, compose } from 'redux';
import { state } from 'losen';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import schema from './api/bus-tilbygg';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ [state.NAME]: state.reducer(schema) });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

export { store, persistor };
