import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../img/Logo.svg';
import heartIcon from '../../img/Favourites.svg';
import shopIcon from '../../img/ShoppingBag.svg';
import burgerOpenIcon from '../../img/Menu.svg';
import burgerCloseIcon from '../../img/Close.svg';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';

interface Props {
  burgerMenu: boolean,
  isBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const navigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/Accessories', text: 'Accessories' },
];

export const Header: React.FC<Props> = ({ burgerMenu, isBurgerMenu }) => {
  if (burgerMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className="header__content__nav">
            <NavLink
              to="/"
              className="header__logo"
              onClick={() => isBurgerMenu(false)}
            >
              <img src={logo} alt="logo" />
            </NavLink>

            <ul className="header__content__nav__list menu-moved">
              {navigationLinks.map(link => (
                <li key={link.text} className="header__content__nav__item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      classNames('header__content__nav__link', {
                        'header__is-active': isActive,
                      })
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__content__buttons">
            <button
              className="header__content__buttons-right menu-moved">
              <img src={heartIcon} alt="favorites" />
            </button>

            <button
              className="header__content__buttons-right menu-moved">
              <img src={shopIcon} alt="shopCard" />
            </button>

            {burgerMenu
              ? (
                <button
                  className="header__content__buttons-right menu"
                  onClick={() => isBurgerMenu(false)}
                >
                  <img src={burgerCloseIcon} alt="Menu" />
                </button>
              )
              : (
                <button
                  className="header__content__buttons-right menu"
                  onClick={() => isBurgerMenu(true)}
                >
                  <img src={burgerOpenIcon} alt="Menu" />
                </button>
              )}
          </div>
        </div>
        <BurgerMenu
          navLinks={navigationLinks}
          burgerMenu={burgerMenu}
          isBurgerMenu={isBurgerMenu}
        />
      </div>
    </header>
  );
};
