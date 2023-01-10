import React from 'react';
import './Footer.scss';
import logo from '../../img/Logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="logo" />

      <div className="footer__nav">
        <a
          href="https://github.com/FE-SEP22-Gryffindor"
          className="footer__nav__link"
        >
          github
        </a>

        <a href="/" className="footer__nav__link">
          contacts
        </a>

        <a href="/" className="footer__nav__link">
          rights
        </a>
      </div>

      <div className="footer__topscroll">
        Back to top
        <button
          type="button"
          className="footer__topscroll__button"
          onClick={() => window.scrollTo({ top: 0 })}
        />
      </div>
    </footer>
  );
};
