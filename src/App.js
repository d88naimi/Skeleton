import React from "react";
import PropTypes from 'prop-types'
import Header from './components/Header';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import {checkLoginStatus} from './actions/auth';
import { connect } from 'react-redux';
import {Content, Layout} from "react-mdl";
import backgroud from './assets/images/example.jpg';

class App extends React.Component{

  constructor(props) {
    super(props);
    props.checkLoginStatus(); // first action dispatch of our app (except routing)
  }

  render() {
    return (
      <Layout fixedHeader style={{background: `url(${backgroud}) center / cover`}}>
        <Header />
        <Drawer />
        <Content />
        <Footer/>
      </Layout>
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