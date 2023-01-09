import React, { useState } from 'react';
import closeIcon from '../../img/CloseForCart.svg';
import PhonePic from '../../img/Cart-img-Phone.png';
import minusIcon from '../../img/Minus.svg';
import PlusIcon from '../../img/Plus.svg';

import './CartCard.scss';

export const CartCard: React.FC = () => {
  const [counterOfItetms, setCounterOfItetms] = useState(1);

  return (
    <div className='cart'>
      <div className='cart__header'>
        <div className='cart__links'>
          <button className='cart__button__close'>
            <img
              className='cart__closer'
              src={closeIcon}
              alt="Delete product" />
          </button>

          <img
            className='cart__picture'
            src={PhonePic}
            alt="Product picture" />
        </div>

        <p
          className='cart__header__text'
        >Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>
      <div className='cart__counting'>
        <div className='cart__amount'>
          <button
            onClick={() => setCounterOfItetms(prevState => prevState - 1)}
            className='cart__button cart__button__minus'
          >

            <img
              className='cart__button__icon'
              src={minusIcon}
              alt="minus"
            />
          </button>

          <p>{`${counterOfItetms}`}</p>

          <button
            onClick={() => setCounterOfItetms(prevState => prevState + 1)}
            className='cart__button cart__button__plus'
          >
            <img
              className='cart__button__icon'
              src={PlusIcon}
              alt="plus"
            />
          </button>
        </div>

        <h2 className='cart__value'>
          $999
        </h2>
      </div>
    </div>
  );
};
