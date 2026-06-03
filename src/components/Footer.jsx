import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/portfolio" className="footer-link">Portfolio</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Fidarix. All rights reserved.</p>
      </div>
    </footer>
  );
}
