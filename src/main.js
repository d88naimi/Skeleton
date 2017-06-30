import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
// import 'materialize-css/dist/css/materialize.css';
import 'jquery';
import 'materialize-css/dist/js/materialize';
import './styles/main.scss'
injectTapEventPlugin();


// Render Setup
// ------------------------------------
let render = () => {
  const routes = require('./config/routes').default;
  ReactDOM.render(routes, document.getElementById('app'));
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, document.getElementById('app'))
    };

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e);
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './config/routes',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
        render()
      })
    )
  }
}

render();
