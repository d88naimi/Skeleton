import React from 'react';
import { NavLink } from 'react-router-dom'
import {FormattedMessage, FormattedDate} from 'react-intl';
import './Footer.scss';


const Footer = () => (
  <footer className="page-footer grayBack">
    <div className="container grayBack">
      
    <div className="footer-copyright">
      <div className="container">
        Copyright © 2017, <a href="/">TransUnited </a>
        <hr/>
        <nav>
          <div className="nav-wrapper">
            <ul className="left">
              <li><NavLink className="grey-text text-lighten-4" to="/faq"><FormattedMessage id="app.footer.faqs" /></NavLink></li>
              <li><NavLink className="grey-text text-lighten-4" to="/about"><FormattedMessage id="app.footer.about" /></NavLink></li>
              <li><NavLink className="grey-text text-lighten-4" to="/contact-us">Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
    </div>
  </footer>
);

export default Footer;