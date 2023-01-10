/* eslint-disable max-len */
import React, { useContext } from 'react';
import closeIcon from '../../img/CloseForCart.svg';
import minusIcon from '../../img/Minus.svg';
import PlusIcon from '../../img/Plus.svg';
import './CartCard.scss';
import { CartCardItem } from '../../types/CartCardItem';
import { CartAndFavContext } from '../CartAndFavContext';

interface Props {
  card: CartCardItem
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>
}

export const CartCard: React.FC<Props> = ({ card, setTotalAmount }) => {
  const { cartList, setCartList } = useContext(CartAndFavContext);
  const totalAmountOfCard = card.phone.price * card.quantity;
  const handleMinus = () => {
    const newList = cartList.map(el => {
      if (el === card) {
        el.quantity -= 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalAmount(prevState => prevState - Number(card.phone.price));
  };

  const handlePlus = () => {
    const newList = cartList.map(el => {
      if (el === card) {
        el.quantity += 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalAmount(prevState => prevState + Number(card.phone.price));
  };

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
            src={card.phone.image}
            alt="Product picture" />
        </div>

        <p
          className='cart__header__text'
        >
          {card.phone.name}
        </p>
      </div>
      <div className='cart__counting'>
        <div className='cart__amount'>
          <button
            onClick={handleMinus}
            className='cart__button cart__button__minus'
            disabled={card.quantity <= 1}
          >

            <img
              className='cart__button__icon'
              src={minusIcon}
              alt="minus"
            />
          </button>

          <p>{`${card.quantity}`}</p>

          <button
            onClick={handlePlus}
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
