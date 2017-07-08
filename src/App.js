import React from "react";
import PropTypes from 'prop-types'
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ErrorMsg from './components/ErrorMsg';

import Results from './components/Results';

import FAQ from './components/FAQ';
import About from './components/About';
import Dashboard from './components/Dashboard';
import PhotoTest from './components/PhotoTest';
import AgentDetail from './components/AgentDetail';
import Plans from './components/Plans';

import {checkLoginStatus} from './actions/auth';
import { connect } from 'react-redux';
import Home from "./components/Home";
import { Route, IndexRoute } from 'react-router';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import MessagesTest from "./components/MessagesTest";
import Spinner from "./components/Spinner";
addLocaleData([...en, ...fr, ...es]);

class App extends React.Component{

  constructor(props) {
    super(props);
    props.checkLoginStatus(); // first action dispatch of our app (except routing)
  }

  render() {
    // console.log(this.props);
    const {language, messages} = this.props;
    return (


      <IntlProvider locale={language} messages={messages}>
        <div className='root'>
          <Header />
          <main>
            <ErrorMsg />
            <Spinner/>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
            <Route path="/results" component={Results} />
            <Route path="/faq" component={FAQ} />
            <Route path="/about" component={About} />
            <Route path="/dashboard"component={Dashboard}/>
            <Route path="/photo-test" component={PhotoTest} />
            <Route path="/plans" component={Plans} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/agents/:id" component={AgentDetail} />
            <Route path="/agent-profile" component={AgentDetail}/>
            <Route path="/messages" component={MessagesTest}/>
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