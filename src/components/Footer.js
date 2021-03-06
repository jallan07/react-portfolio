import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const handleGenerateCopyrightYear = () => {
    return `${new Date().getFullYear()}`;
  };

  return (
    <footer>
      <div className="footer-content">
        <h6>
          Created by Josh Allan | Copyright © {handleGenerateCopyrightYear()}
        </h6>
        <span>
          <a href="https://www.freepik.com" target="_blank" rel="noreferrer">
            Background by starline
          </a>
        </span>
        <span> | </span>
        <span>
          <a href="https://www.reactjs.org" target="_blank" rel="noreferrer">
            Built with React.js
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
