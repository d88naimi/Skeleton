import React from 'react'
import App from '../App'
import { Provider } from 'react-redux'
import configureStore, {history} from './store';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

const store = configureStore();


const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

export default routes;
