import React from 'react';
import ReactDOM from 'react-dom';
import App from './renderer/App';
import './assets/css/bulma.min.css';
import './assets/css/app.css';
import './assets/css/main.css';
import { store } from './main/ot_redux_app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './renderer/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
