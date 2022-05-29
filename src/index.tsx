import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import './components/styles/cssReset.scss';
import './components/styles/flexboxgrid.scss';
import './components/styles/base.scss';
import Loader from './components/Loader/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
