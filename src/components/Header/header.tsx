import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../img/Logo.svg';
import heartIcon from '../../img/Favourites.svg';
import shopIcon from '../../img/ShoppingBag.svg';
import burgerOpenIcon from '../../img/Menu.svg';
import classNames from 'classnames';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className='header__content'>
          <nav className="header__content__nav">
            <NavLink to="/" className='header__logo'>
              <img src={`${logo}`} alt="logo" />
            </NavLink>

            <ul className='header__content__nav__list menu-moved'>
              <li className='header__content__nav__item'>
                <NavLink
                  to="/"
                  className={({ isActive }) => classNames(
                    'header__content__nav__link',
                    { 'is-active': isActive },
                  )
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className='header__content__nav__item'>
                <NavLink to="/phones" className={({ isActive }) => classNames(
                  'header__content__nav__link',
                  { 'is-active': isActive },
                )
                }>
                  Phones
                </NavLink>
              </li>

              <li className='header__content__nav__item'>
                <NavLink to="/" className='header__content__nav__link'>
                  Tablets
                </NavLink>
              </li>

              <li className='header__content__nav__item'>
                <NavLink to="/" className='header__content__nav__link'>
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='header__content__buttons'>
            <Link to="/" className='header__content__buttons-right menu-moved'>
              <img src={`${heartIcon}`} alt="favorites" />
            </Link>

            <Link to="/" className='header__content__buttons-right menu-moved'>
              <img src={`${shopIcon}`} alt="shopCard" />
            </Link>

            <Link to="/" className='header__content__buttons-right menu'>
              <img src={`${burgerOpenIcon}`} alt="Menu" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
