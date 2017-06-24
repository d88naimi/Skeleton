import React from "react";
import PropTypes from 'prop-types'
// components imports
import Header from './components/Header';
import Drawer from './components/Drawer';
import Login from './components/Login';
import Footer from './components/Footer';
import Results from './components/Results';
import Agents from './components/Agents';
import {checkLoginStatus} from './actions/auth';
import { connect } from 'react-redux';
import {Search} from "./components/Search";
import Agent from "./components/Agent/Agent";
import Home from "./components/Home";
import { Route } from 'react-router';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
addLocaleData([...en, ...fr, ...es]);

class App extends React.Component{

  constructor(props) {
    super(props);
    props.checkLoginStatus(); // first action dispatch of our app (except routing)
  }

  render() {
    console.log(this.props);
    const {language, messages} = this.props;
    return (
      <IntlProvider locale={language} messages={messages}>
        <div className='root'>
          <Header />
          <main>
            <Drawer />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />

            <Route path="/results" component={Results} />
            <Route path="/agents" component={Agents} />

          </main>
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}
App.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired
};

export default connect(
  // ({routing}) => ({location: routing.location}), // NavLink update
  ({lang}) => ({language: lang.language, messages: lang.messages}),
  { checkLoginStatus }
)(App);