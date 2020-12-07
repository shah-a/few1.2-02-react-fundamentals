// import React from 'react'
import './Footer.css';

function Footer() {
  const year = new Date().getUTCFullYear();
  return(
    <div className="Footer">
      <p>Ali Shah &copy; {year}</p>
    </div>
  );
}

export default Footer;
