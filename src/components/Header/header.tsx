import React, { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../img/Logo.svg';
import heartIcon from '../../img/Favourites.svg';
import shopIcon from '../../img/ShoppingBag.svg';
import burgerOpenIcon from '../../img/Menu.svg';
import burgerCloseIcon from '../../img/Close.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Navigation } from '../Navigation';
import {
  CartAndFavContext,
} from '../../components/CartAndFavContext/CartAndFavContext';

const navigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/Accessories', text: 'Accessories' },
];

export const Header: React.FC = () => {
  const [burgerMenuOpen, isBurgerMenuOpen] = useState(false);
  const { CartList } = useContext(CartAndFavContext);

  if (burgerMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        isBurgerMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className="header__content__nav">
            <NavLink
              to="/"
              className="header__logo"
              onClick={() => isBurgerMenuOpen(false)}
            >
              <img src={logo} alt="logo" />
            </NavLink>

            {!burgerMenuOpen && (
              <Navigation
                navigationLinks={navigationLinks}
                burgerMenuOpen={burgerMenuOpen}
                isBurgerMenuOpen={isBurgerMenuOpen}
              />
            )}
          </nav>

          <div className="header__content__buttons">
            <NavLink
              to="/favorites"
              className={({ isActive }) => classNames(
                'header__content__buttons-right menu-moved menu-hover',
                { 'header__content__buttons__is-active': isActive },
              )}
            >
              <img src={heartIcon} alt="favorites" />
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) => classNames(
                'header__content__buttons-right menu-moved menu-hover',
                { 'header__content__buttons__is-active': isActive },
              )}
            >
              <img src={shopIcon} alt="shopCard" />
              <span
                className={classNames('cart-quantity', {
                  visible: CartList.length > 0,
                })}
              >
                {CartList.length}
              </span>
            </NavLink>

            {burgerMenuOpen ? (
              <button
                className="header__content__buttons-right menu"
                onClick={() => isBurgerMenuOpen(false)}
              >
                <img src={burgerCloseIcon} alt="Menu" />
              </button>
            ) : (
              <button
                className="header__content__buttons-right menu"
                onClick={() => isBurgerMenuOpen(true)}
              >
                <img src={burgerOpenIcon} alt="Menu" />
              </button>
            )}
          </div>
        </div>
        <BurgerMenu
          navigationLinks={navigationLinks}
          burgerMenuOpen={burgerMenuOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />
      </div>
    </header>
  );
};
