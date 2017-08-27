import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import App from './App';
import configureStore from './redux/configureStore';


const store = configureStore();
const Application = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Application, document.getElementById('react-view'))
