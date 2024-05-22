import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create this CSS file
import instagramIcon from '../../logos/instagram.svg';
import linkedinIcon from '../../logos/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="links-container">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <a href="https://www.linkedin.com/in/rodney-bejabeng" className="footer-link">Contact Us</a>
        </div>
        <div className="social-media-links">
          <a href="https://www.instagram.com/bejabeng/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/rodney-bejabeng" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <p className="footer-rights">© Rodney Bejabeng/Mintier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
