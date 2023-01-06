import React from 'react';
import './Footer.scss';
import logo from '../../images/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="logo"
        className="logo"
      />

      <div className="footer__nav">
        <a href="/github" className="footer__nav__link">
          github
        </a>

        <a href="/contacts" className="footer__nav__link">
          contacts
        </a>

        <a href="/rights" className="footer__nav__link">
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
