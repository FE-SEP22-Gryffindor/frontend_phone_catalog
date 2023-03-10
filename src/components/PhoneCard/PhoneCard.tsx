import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import './PhoneCard.scss';
import heartLogo from './imagesCard/heart.png';
import heartLogoActive from './imagesCard/like_favourite_favorite_icon.svg';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { CartAndFavContext } from '../CartAndFavContext/CartAndFavContext';

interface Props {
  phone: Phone;
}

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { setCartList, setFavList, cartList, favtList }
    = useContext(CartAndFavContext);

  const foundItemCart = cartList.find((item) => item.phone.slug === phone.slug);

  const foundItemfav = favtList.find((item) => item.slug === phone.slug);
  const [isActiveToCard, setIsActiveToCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (foundItemCart) {
      setIsActiveToCard(true);
    }

    if (foundItemfav) {
      setIsFavorite(true);
    }
  }, []);

  const handleCardButton = () => {
    setIsActiveToCard(!isActiveToCard);

    // add to state if no found in storage
    if (!foundItemCart) {
      setCartList([...cartList, { phone, quantity: 1 }]);
    }

    // delete from state
    if (foundItemCart) {
      const cleanStorage = cartList
        .filter((item) => item.phone.slug !== phone.slug);

      setCartList(cleanStorage);
    }
  };

  const handleFavButton = () => {
    setIsFavorite(!isFavorite);

    // add to state if no found in storage
    if (!foundItemfav) {
      setFavList([...favtList, phone]);
    }

    // delete from state
    if (foundItemfav) {
      const cleanStorage = favtList.filter((item) => item.slug !== phone.slug);

      setFavList(cleanStorage);
    }
  };

  return (
    <section className="card">
      <div className="card__img-box">
        <img src={phone.image} alt="Phone logo" className="card__image" />
      </div>

      <Link to={`/phones/${phone.slug}`} className="card__title">
        {phone.name}
      </Link>

      <div className="card__price-box">
        {phone.discountPrice
          ? <p className="card__price-discount">${phone.discountPrice}</p>
          : <p className="card__price-discount">${phone.price}</p>}

        {phone.discountPrice
          ? <p className="card__price-price">${phone.price}</p>
          : null}
      </div>

      <div className="card__product-devider"></div>

      <div className="specs__block">
        <div className="card__specs">
          <div className="card__specs-title">Screen</div>
          <div className="card__specs-text">{phone.screen}</div>
        </div>
        <div className="card__specs">
          <div className="card__specs-title">Capacity</div>
          <div className="card__specs-text">{phone.memory}</div>
        </div>
        <div className="card__specs">
          <div className="card__specs-title">RAM</div>
          <div className="card__specs-text">{phone.ram}</div>
        </div>
      </div>

      <div className="button__block">
        <Link
          to="#buy"
          className={classNames('button__block-add', {
            'button__block-add-active': isActiveToCard,
          })}
          onClick={handleCardButton}
        >
          {!isActiveToCard ? 'Add to cart' : 'Added'}
        </Link>

        <Link
          to="#fav"
          className={classNames('button__block-like', {
            'button__block-like-active': isFavorite,
          })}
          onClick={handleFavButton}
        >
          <img
            src={!isFavorite ? heartLogo : heartLogoActive}
            alt="Phone logo"
            className="heart"
          />
        </Link>
      </div>
    </section>
  );
};
