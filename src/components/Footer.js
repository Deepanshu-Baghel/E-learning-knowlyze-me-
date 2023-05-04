import React, { useEffect } from "react";
import './Footer.css';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const adjustFooterPosition = () => {
      const body = document.body;
      const html = document.documentElement;
      const windowHeight = window.innerHeight;
      const bodyHeight = Math.max(
        body.scrollHeight, 
        body.offsetHeight, 
        html.clientHeight, 
        html.scrollHeight, 
        html.offsetHeight
      );
      if (windowHeight >= bodyHeight) {
        document.querySelector('.footer').classList.add('fixed-bottom');
      } else {
        document.querySelector('.footer').classList.remove('fixed-bottom');
      }
    }
    
    // Call the function when the page is first loaded
    adjustFooterPosition();
    
    // Call the function every time the window is resized
    window.addEventListener('resize', adjustFooterPosition);

    // Clean up event listener when component is unmounted
    return () => window.removeEventListener('resize', adjustFooterPosition);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My eLearning Site</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FaDiscord className="icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="icons" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube className="icons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
