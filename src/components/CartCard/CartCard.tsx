import React, { useState } from 'react';
import closeIcon from '../../img/CloseForCart.svg';
import minusIcon from '../../img/Minus.svg';
import PlusIcon from '../../img/Plus.svg';
import './CartCard.scss';
import { Phone } from '../../types/Phone';

interface Props {
  card: Phone
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>
}

export const CartCard: React.FC<Props> = ({ card, setTotalAmount }) => {
  const [counterOfItetms, setCounterOfItetms] = useState(1);

  const totalAmountOfCard = card.price * counterOfItetms;

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
            src={card.image}
            alt="Product picture" />
        </div>

        <p
          className='cart__header__text'
        >
          {card.name}
        </p>
      </div>
      <div className='cart__counting'>
        <div className='cart__amount'>
          <button
            onClick={() => {
              setCounterOfItetms(prevState => prevState - 1);
              setTotalAmount(prevState => prevState - Number(card.price));
            }}
            className='cart__button cart__button__minus'
            disabled={counterOfItetms <= 1}
          >

            <img
              className='cart__button__icon'
              src={minusIcon}
              alt="minus"
            />
          </button>

          <p>{`${counterOfItetms}`}</p>

          <button
            onClick={() => {
              setCounterOfItetms(prevState => prevState + 1);
              setTotalAmount(prevState => prevState + Number(card.price));
            }}
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
          {`$${totalAmountOfCard}`}
        </h2>
      </div>
    </div>
  );
};
