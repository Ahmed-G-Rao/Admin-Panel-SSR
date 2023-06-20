import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import mainReducer from '../src/reducers/rootReducer'
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import configureStore from './store';
import Store from './store';
Store.subscribe(() => console.log(Store.getState()))
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
