/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import classNames from 'classnames';
import './PhoneCard.scss';
import picture from './imagesCard/image 2.jpg';
import heartLogo from './imagesCard/heart.png';
import heartLogoActive from './imagesCard/like_favourite_favorite_icon.svg';
import { Link } from 'react-router-dom';

const product = {
  id: '1',
  title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
  price: '899',
  discountPrice: '799',
  color: 'silver',
  specs: {
    screen: '5.8” OLED',
    resolution: '2688x1242',
    processor: 'Apple A12 Bionic',
    ram: '4 GB',
    memory: '64 GB',
    camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
    zoom: 'Optical, 2x',
    cell: 'GSM, LTE, UMTS',
  },
  about: [
    {
      header: 'And then there was Pro',
      description:
        'A transformative triple‑camera system that adds tons of capability without complexity. \n'
        + '\n'
        + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
    },
    {
      header: 'Camera',
      description:
        'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
    },
    {
      header:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      description:
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
    },
  ],
  images: ['link1', 'link2', 'link3', 'link4', 'link5'],
};

export const PhoneCard: React.FC = () => {
  const [isActiveToCard, setIsActiveToCard] = useState(false);
  const handleCardButton = () => setIsActiveToCard(!isActiveToCard);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavButton = () => setIsFavorite(!isFavorite);

  console.log(isActiveToCard);

  return (
    <section className="card">
      <div className="card__img-box">
        <img src={picture} alt="Phone logo" className="card__image" />
      </div>

      <h2 className="card__title">{product.title}</h2>

      <div className="card__price-box">
        <p className="card__price-discount">${product.discountPrice}</p>
        <p className="card__price-price">${product.price}</p>
      </div>

      <div className="card__product-devider"></div>

      <div className="specs__block">
        <div className="card__specs">
          <div className="card__specs-title">Screen</div>
          <div className="card__specs-text">{product.specs.screen}</div>
        </div>
        <div className="card__specs">
          <div className="card__specs-title">Capacity</div>
          <div className="card__specs-text">{product.specs.memory}</div>
        </div>
        <div className="card__specs">
          <div className="card__specs-title">RAM</div>
          <div className="card__specs-text">{product.specs.ram}</div>
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
