import React from "react";
import PropTypes from 'prop-types'
import Header from './components/Header';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import {checkLoginStatus} from './actions/auth';
import { connect } from 'react-redux';
// import backgroud from './assets/images/example.jpg';
import {Search} from "./components/Search";
import Agent from "./components/Agent/Agent";
import { Route } from 'react-router';

class App extends React.Component{

  constructor(props) {
    super(props);
    props.checkLoginStatus(); // first action dispatch of our app (except routing)
  }

  render() {
    return (
      <div>
        <Header />
        <Drawer />
        <main>
          <Route exact path="/" component={Search} />
          <Agent />
        </main>
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired
};

export default connect(
  // ({routing}) => ({location: routing.location}), // NavLink update
  null,
  { checkLoginStatus }
)(App);