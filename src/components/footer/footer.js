import React from 'react';
import './footer.style.css';

const Footer = (props) => (
  <footer className="footer" id="footer">
    <div className="footer__wrapper">
      <a
        className="footer__link-github"
        href="https://github.com/Maks-T"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="footer__link-github-icon"></div>
        Maxim Tsatsura
      </a>
    </div>
  </footer>
);

export default Footer;
