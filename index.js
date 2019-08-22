import React from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from './containers/BaseRouter';
import * as serviceWorker from './serviceWorker';
import './assets/style/index.css';

import UserReducer from './store/reducers/user';
import TestReducer from './store/reducers/test';
import HourReducer from './store/reducers/hour';
import ModalReducer from './store/reducers/modal';
import AdminReducer from './store/reducers/auth';
import ColorReducer from './store/reducers/color';
import EventReducer from './store/reducers/event';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchHours, watchTests, watchUsers, watchEvents,watchPayments } from "./store/sagas";

import common_de from './assets/translations/de/common';
import common_en from './assets/translations/en/common';
import common_sk from './assets/translations/sk/common';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { I18nextProvider } from "react-i18next";


i18next
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    resources: {
      sk: {
        common: common_sk
      },
      en: {
        common: common_en     // 'common' is our custom namespace
      },
      de: {
        common: common_de
      },
    },
    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'myDomain',

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    }
  });


// redux dev tools only available in development mode(not everybody can see state)
const composeEnhancers = process.env.NODE_ENV === 'development' ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// lock only for developers in config/env.js

const rootReducer = combineReducers({
  user: UserReducer,
  test: TestReducer,
  hour: HourReducer,
  modal: ModalReducer,
  admin: AdminReducer,
  color: ColorReducer,
  event: EventReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchUsers);
sagaMiddleware.run(watchTests);
sagaMiddleware.run(watchHours);
sagaMiddleware.run(watchEvents);
sagaMiddleware.run(watchPayments);


ReactDOM.hydrate(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BaseRouter/>
    </Provider>
  </I18nextProvider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
