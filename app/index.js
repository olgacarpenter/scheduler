import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app-container';
import { createStore } from 'redux';
import scheduleApp from './reducers';
import { Provider } from 'react-redux';


let store = createStore(scheduleApp);

require('./styles/styles.scss');

ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>
    , document.getElementById('app')
);