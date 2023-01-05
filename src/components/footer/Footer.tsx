import React from 'react';
import './Footer.scss';
import logo from '../../images/Nice Gadgets.svg';
import button from '../../images/footerButton.svg';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content">
          <img
            className='footer__content__logo'
            src={logo}
            alt="logo"
          />

          <a className='footer__content__link' href="">github</a>

          <a className='footer__content__link' href="">contacts</a>

          <a className='footer__content__link' href="">rights</a>

          <a className='footer__content__button' href="/">
            <img src={button} alt="button top" />
          </a>
        </div>
      </div>
    </footer>
  );
};
