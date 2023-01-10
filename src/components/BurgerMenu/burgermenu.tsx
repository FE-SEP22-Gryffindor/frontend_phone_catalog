import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerNavLinks } from '../../types/headerNavLinks';
import './burgermenu.scss';

import heartIcon from '../../img/Favourites.svg';
import shopIcon from '../../img/ShoppingBag.svg';
import { Navigation } from '../Navigation';

interface Props {
  navigationLinks: headerNavLinks[];
  burgerMenuOpen: boolean;
  isBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  navigationLinks,
  burgerMenuOpen,
  isBurgerMenuOpen,
}) => {
  return (
    <div
      className={classNames('burger__menu', {
        'burger__menu-open': burgerMenuOpen,
      })}
    >
      <nav className="burger__menu__nav">
        <Navigation
          navigationLinks={navigationLinks}
          burgerMenuOpen={burgerMenuOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />
      </nav>

      <div className="burger__menu__buttons">
        <NavLink
          to="/favorites"
          onClick={() => isBurgerMenuOpen(false)}
          className={({ isActive }) => classNames(
            'burger__menu__buttons-bottom',
            { 'burger__menu__buttons__is-active': isActive },
          )}
        >
          <img
            src={heartIcon}
            alt="Favourites"
            className="burger__menu__buttons-images"
          />
        </NavLink>

        <NavLink
          to="/cart"
          onClick={() => isBurgerMenuOpen(false)}
          className={({ isActive }) => classNames(
            'burger__menu__buttons-bottom',
            { 'burger__menu__buttons__is-active': isActive },
          )}
        >
          <img
            src={shopIcon}
            alt="Shop"
            className="burger__menu__buttons-images"
          />
        </NavLink>
      </div>
    </div>
  );
};
