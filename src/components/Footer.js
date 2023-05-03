import React from "react";

import './Footer.css';

import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My eLearning Site</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              
            <div >
                <FaDiscord className="icons" />
              </div>

              <div>
                <FaInstagram className="icons" />
              </div>
              
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
