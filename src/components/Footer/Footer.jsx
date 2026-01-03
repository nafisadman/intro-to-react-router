import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <p>
        <small>Thank you for visiting our website</small>
        <div>
          <a className="footer-items" href="">Terms</a>
          <a className="footer-items" href="">Privacy</a>
          <a className="footer-items" href="">Facebook</a>
        </div>
      </p>
    </div>
  );
};

export default Footer;
