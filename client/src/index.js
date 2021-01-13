import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CoffeeService from './services/coffee-service';
import { CoffeeProvider } from './components/coffee-service-context';

import store from './store';

const coffeeService = new CoffeeService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorBoundry>
        <CoffeeProvider value={ coffeeService } >
          <Router>
            <App />
          </Router>
        </CoffeeProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
