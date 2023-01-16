import React from 'react';
import './Footer.scss';
import logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';

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

        <Link to="/tablets" className="footer__nav__link">
          contacts
        </Link>

        <Link to="/tablets" className="footer__nav__link">
          rights
        </Link>
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
