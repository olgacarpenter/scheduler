import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app-container';
import { createStore } from 'redux';
import scheduleApp from './reducers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


let store = createStore(scheduleApp);

ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>
    , document.getElementById('root')
);