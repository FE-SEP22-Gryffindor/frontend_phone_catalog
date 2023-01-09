import React, { useState } from 'react';
import classNames from 'classnames';
import './PhoneCard.scss';
import heartLogo from './imagesCard/heart.png';
import heartLogoActive from './imagesCard/like_favourite_favorite_icon.svg';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone;
}

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const [isActiveToCard, setIsActiveToCard] = useState(false);
  const handleCardButton = () => setIsActiveToCard(!isActiveToCard);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavButton = () => setIsFavorite(!isFavorite);

  return (
    <section className="card">
      <div className="card__img-box">
        <img src={phone.image} alt="Phone logo" className="card__image" />
      </div>

      <h2 className="card__title">{phone.name}</h2>

      <div className="card__price-box">
        <p className="card__price-discount">${phone.discountPrice}</p>
        <p className="card__price-price">${phone.price}</p>
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
