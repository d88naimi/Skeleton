import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.scss';


const Footer = () => (
  <footer className="page-footer grayBack">
    <div className="container grayBack">
      
    <div className="footer-copyright">
      <div className="container">
        © 2017 Copyright
        <hr/>
        <nav>
          <div class="nav-wrapper">
            <ul className="left">
              <li><NavLink className="grey-text text-lighten-4" to="/faq">FAQ</NavLink></li>
              <li><NavLink className="grey-text text-lighten-4" to="/about">About Us</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
    </div>
  </footer>
);

export default Footer;